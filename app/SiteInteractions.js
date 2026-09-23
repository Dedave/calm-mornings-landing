"use client";

import { useEffect } from "react";

const CONFIG = {
  googleAdsId: null, // e.g. "AW-123456789"
  gaMeasurementId: null, // e.g. "G-XXXXXXX"
  checkoutUrl: "https://selar.com/0m73087f66",
};

function hasFbq() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

function hasGtag() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

// CTA click = intent to purchase, NOT a confirmed purchase.
// Never fire Purchase from a CTA click.
function trackPurchaseCTA(source) {
  // Meta Pixel
  if (hasFbq()) {
    window.fbq("track", "InitiateCheckout", {
      content_name: "Calm Mornings - Visual Routine System",
      content_type: "product",
      value: 7,
      currency: "USD",
      source,
    });
  }

  // Google Analytics / Google Ads — currently inactive
  // because no IDs/scripts have been configured yet.
  if (hasGtag()) {
    window.gtag("event", "begin_checkout", {
      currency: "USD",
      value: 7,
      items: [
        {
          item_name: "Calm Mornings - Visual Routine System",
        },
      ],
      source,
    });

    if (CONFIG.googleAdsId) {
      window.gtag("event", "conversion", {
        send_to: CONFIG.googleAdsId,
      });
    }
  }
}

/**
 * Handles the landing page's client-side interactions:
 *
 * - Tracks purchase CTA clicks as Meta InitiateCheckout
 * - Controls sticky mobile CTA visibility
 * - Sets the footer year
 * - Keeps only one FAQ accordion open at a time
 *
 * PageView and ViewContent are handled by the Meta Pixel
 * initialization in app/layout.js.
 *
 * IMPORTANT:
 * InitiateCheckout does NOT mean a purchase occurred.
 * Purchase must only be fired after reliable confirmation
 * of a completed transaction.
 */
export default function SiteInteractions() {
  useEffect(() => {
    // -----------------------------------------
    // PURCHASE CTA TRACKING
    // -----------------------------------------

    function onClick(event) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("[data-cta]");

      if (!link) {
        return;
      }

      const source = link.getAttribute("data-cta") || "unknown";

      trackPurchaseCTA(source);
    }

    document.addEventListener("click", onClick);

    // -----------------------------------------
    // STICKY MOBILE CTA
    // -----------------------------------------

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
      window.addEventListener("scroll", onScroll, {
        passive: true,
      });

      computeThreshold();
      onScroll();
    }

    // -----------------------------------------
    // FOOTER YEAR
    // -----------------------------------------

    const yearEl = document.getElementById("year");

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear().toString();
    }

    // -----------------------------------------
    // FAQ ACCORDION
    // -----------------------------------------

    const faqItems = document.querySelectorAll(".faq-item");

    function onToggle(event) {
      const item = event.currentTarget;

      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) {
            other.open = false;
          }
        });
      }
    }

    faqItems.forEach((item) => {
      item.addEventListener("toggle", onToggle);
    });

    // -----------------------------------------
    // CLEANUP
    // -----------------------------------------

    return () => {
      document.removeEventListener("click", onClick);

      window.removeEventListener("resize", computeThreshold);
      window.removeEventListener("scroll", onScroll);

      faqItems.forEach((item) => {
        item.removeEventListener("toggle", onToggle);
      });
    };
  }, []);

  return null;
}

export { CONFIG };