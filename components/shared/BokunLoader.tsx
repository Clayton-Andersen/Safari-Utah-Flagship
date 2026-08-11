"use client";

import { useEffect } from "react";

type BokunLoaderProps = {
  channelUuid?: string;
  channelUuids?: string[];
};

function getScriptId(channelUuid: string) {
  return `bokun-widgets-loader-${channelUuid}`;
}

export default function BokunLoader({ channelUuid, channelUuids }: BokunLoaderProps) {
  const channelsKey = Array.from(
    new Set([...(channelUuids ?? []), ...(channelUuid ? [channelUuid] : [])].filter(Boolean))
  ).join("|");

  useEffect(() => {
    if (!channelsKey) return;

    channelsKey.split("|").forEach((channel) => {
      const scriptId = getScriptId(channel);
      const existingScript = document.getElementById(scriptId);

      if (existingScript) return;

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${channel}`;
      script.async = true;

      document.body.appendChild(script);
    });
  }, [channelsKey]);

  return null;
}
