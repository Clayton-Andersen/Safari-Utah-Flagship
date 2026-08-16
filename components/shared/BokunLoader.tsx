"use client";

import { useEffect } from "react";
import { websiteBookingChannelUuid } from "@/lib/booking";

const scriptId = `bokun-widgets-loader-${websiteBookingChannelUuid}`;
const loaderSrc = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${websiteBookingChannelUuid}`;

export default function BokunLoader() {
  useEffect(() => {
    if (document.getElementById(scriptId)) return;

    const existingCanonicalLoader = document.querySelector<HTMLScriptElement>(
      `script[src="${loaderSrc}"]`
    );

    if (existingCanonicalLoader) {
      existingCanonicalLoader.id = scriptId;
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = loaderSrc;
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return null;
}
