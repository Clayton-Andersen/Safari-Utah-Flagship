"use client";

import { useEffect } from "react";

type BokunLoaderProps = {
  channelUuid: string;
};

export default function BokunLoader({ channelUuid }: BokunLoaderProps) {
  useEffect(() => {
    const scriptId = `bokun-widgets-loader-${channelUuid}`;
    const existingScript = document.getElementById(scriptId);

    if (existingScript) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${channelUuid}`;
    script.async = true;

    document.body.appendChild(script);
  }, [channelUuid]);

  return null;
}