"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Once revealed, keep it active to avoid flickering
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.12,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const initObserver = () => {
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => {
        // If already partially in view, activate immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add("active");
        } else {
          observer.observe(el);
        }
      });
    };

    // Initialize with slight timeout to allow DOM mounting
    const timeoutId = setTimeout(initObserver, 80);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
