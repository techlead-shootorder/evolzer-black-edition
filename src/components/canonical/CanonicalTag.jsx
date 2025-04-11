// app/components/CanonicalTag.jsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CanonicalTag() {
  const pathname = usePathname();
  const baseUrl = "https://www.evolzer.com";
  const canonicalUrl = `${baseUrl}${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute("href", canonicalUrl);
    } else {
      const newLink = document.createElement("link");
      newLink.setAttribute("rel", "canonical");
      newLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(newLink);
    }
  }, [canonicalUrl]);

  return null;
}
