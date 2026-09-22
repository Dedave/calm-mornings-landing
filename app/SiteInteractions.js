"use client";

import { useEffect } from "react";

const CONFIG = {
  metaPixelId: null, // e.g. "1234567890123456"
  googleAdsId: null, // e.g. "AW-123456789"
  gaMeasurementId: null, // e.g. "G-XXXXXXX"
  checkoutUrl: "https://selar.com/0m73087f66",
};

function hasFbq() {
  return typeof window.fbq === "function";
}
function hasGtag() {
  return typeof window.gtag === "function";
}

function trackViewContent() {
  if (hasFbq()) {
    window.fbq("track", "ViewContent", {
      content_name: "Calm Mornings - Visual Routine System",
      value: 7,
      currency: "USD",
    });
  }
  if (hasGtag()) {
    window.gtag("event", "view_item", {
      currency: "USD",
      value: 7,
      items: [{ item_name: "Calm Mornings - Visual Routine System" }],
    });
  }
}

// CTA click = intent to purchase, NOT a confirmed purchase.
// Only fire an actual "Purchase" event from a verified post-purchase
// confirmation (e.g. a Selar redirect/webhook), never from a CTA click alone.
function trackPurchaseCTA(source) {
  if (hasFbq()) {
    window.fbq("track", "InitiateCheckout", {
      content_name: "Calm Mornings - Visual Routine System",
      value: 7,
      currency: "USD",
      source,
    });
  }
  if (hasGtag()) {
    window.gtag("event", "begin_checkout", {
      currency: "USD",
      value: 7,
      items: [{ item_name: "Calm Mornings - Visual Routine System" }],
      source,
    });
    if (CONFIG.googleAdsId) {
      window.gtag("event", "conversion", { send_to: CONFIG.googleAdsId });
    }
  }
}

/**
 * Mounts all the page's small interactive behaviors:
 * - view-content analytics ping
 * - data-cta click tracking (delegated, works for any CTA on the page)
 * - sticky mobile CTA visibility after scrolling past the hero
 * - footer year
 * - FAQ accordion: only one <details> open at a time
 */
export default function SiteInteractions() {
  useEffect(() => {
    trackViewContent();

    function onClick(e) {
      const link = e.target.closest("[data-cta]");
      if (link) trackPurchaseCTA(link.getAttribute("data-cta"));
    }
    document.addEventListener("click", onClick);

    const stickyCta = document.getElementById("stickyCta");
    const hero = document.querySelector(".hero");
    let showAfter = 0;

    function computeThreshold() {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      showAfter = window.scrollY + rect.bottom;
    }
    function onScroll() {
      if (!stickyCta) return;
      if (window.scrollY > showAfter) {
        stickyCta.classList.add("visible");
      } else {
        stickyCta.classList.remove("visible");
      }
    }

    if (stickyCta && hero) {
      window.addEventListener("resize", computeThreshold);
      window.addEventListener("scroll", onScroll, { passive: true });
      computeThreshold();
      onScroll();
    }

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const faqItems = document.querySelectorAll(".faq-item");
    function onToggle(e) {
      const item = e.currentTarget;
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    }
    faqItems.forEach((item) => item.addEventListener("toggle", onToggle));

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", computeThreshold);
      window.removeEventListener("scroll", onScroll);
      faqItems.forEach((item) => item.removeEventListener("toggle", onToggle));
    };
  }, []);

  return null;
}

export { CONFIG };
