"use client";

import { useEffect } from "react";

const CONFIG = {
  googleAdsId: null,
  gaMeasurementId: null,
  checkoutUrl: "https://selar.com/0m73087f66",
};

function hasFbq() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

function hasGtag() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

// CTA click = intent to leave the landing page for Selar.
// This is not InitiateCheckout and not Purchase.
function trackPurchaseCTA(source) {
  if (hasFbq()) {
    window.fbq("trackCustom", "SelarOutboundClick", {
      content_name: "Calm Mornings - Visual Routine System",
      content_type: "product",
      value: 7,
      currency: "USD",
      source,
    });
  }

  if (hasGtag() && (CONFIG.gaMeasurementId || CONFIG.googleAdsId)) {
    window.gtag("event", "selar_outbound_click", {
      currency: "USD",
      value: 7,
      source,
      items: [
        {
          item_name: "Calm Mornings - Visual Routine System",
        },
      ],
    });

    if (CONFIG.googleAdsId) {
      window.gtag("event", "conversion", {
        send_to: CONFIG.googleAdsId,
      });
    }
  }
}

export default function SiteInteractions() {
  useEffect(() => {
    function onClick(event) {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const link = target.closest("a[data-cta]");

      if (!link) return;

      const source = link.getAttribute("data-cta") || "unknown";

      // Keep normal behaviour for opening a new tab or modified clicks.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === "_blank"
      ) {
        trackPurchaseCTA(source);
        return;
      }

      // Let the Pixel event begin sending before navigation to Selar.
      event.preventDefault();

      const destination = link.href || CONFIG.checkoutUrl;

      trackPurchaseCTA(source);

      window.setTimeout(() => {
        window.location.assign(destination);
      }, 250);
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

      stickyCta.classList.toggle("visible", window.scrollY > showAfter);
    }

    if (stickyCta && hero) {
      window.addEventListener("resize", computeThreshold);
      window.addEventListener("scroll", onScroll, { passive: true });

      computeThreshold();
      onScroll();
    }

    const yearEl = document.getElementById("year");

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear().toString();
    }

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