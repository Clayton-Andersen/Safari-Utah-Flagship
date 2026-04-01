"use client";

import { useEffect } from "react";

type BokunLoaderProps = {
  channelUuid: string;
};

export default function BokunLoader({ channelUuid }: BokunLoaderProps) {
  useEffect(() => {
    const existingBokunScripts = document.querySelectorAll(
      'script[id^="bokun-widgets-loader-"], script[src*="BokunWidgetsLoader.js"]'
    );

    existingBokunScripts.forEach((script) => {
      script.parentNode?.removeChild(script);
    });

    const script = document.createElement("script");
    script.id = `bokun-widgets-loader-${channelUuid}`;
    script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${channelUuid}`;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      script.parentNode?.removeChild(script);
    };
  }, [channelUuid]);

  return null;
}