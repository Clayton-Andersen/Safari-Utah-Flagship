"use client";

import { useEffect } from "react";

const BOKUN_SCRIPT_ID = "bokun-widgets-loader";
const BOKUN_SCRIPT_SRC =
  "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=af390726-dee6-4233-8c58-0c0de47938d0";

export default function BokunLoader() {
  useEffect(() => {
    const existingScript = document.getElementById(BOKUN_SCRIPT_ID);

    if (existingScript) return;

    const script = document.createElement("script");
    script.id = BOKUN_SCRIPT_ID;
    script.src = BOKUN_SCRIPT_SRC;
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return null;
}