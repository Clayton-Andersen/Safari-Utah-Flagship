"use client";

import { useEffect } from "react";

type BokunLoaderProps = {
  channelUuid?: string;
  channelUuids?: string[];
};

function getScriptId(channelUuid: string) {
  return `bokun-widgets-loader-${channelUuid}`;
}

function removeExistingBokunScripts() {
  document
    .querySelectorAll<HTMLScriptElement>(
      'script[id^="bokun-widgets-loader-"], script[src*="BokunWidgetsLoader.js"]'
    )
    .forEach((script) => {
      script.parentNode?.removeChild(script);
    });
}

export default function BokunLoader({ channelUuid, channelUuids }: BokunLoaderProps) {
  const channelsKey = Array.from(
    new Set([...(channelUuids ?? []), ...(channelUuid ? [channelUuid] : [])].filter(Boolean))
  ).join("|");

  useEffect(() => {
    if (!channelsKey) return;

    const channels = channelsKey.split("|");
    const insertedScripts: HTMLScriptElement[] = [];

    // Bokun keeps one active booking channel in the widget runtime. Reset the
    // loader on each page so buttons do not inherit the channel from a previous
    // client-side route.
    removeExistingBokunScripts();

    channels.forEach((channel) => {
      const script = document.createElement("script");
      script.id = getScriptId(channel);
      script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${channel}`;
      script.async = true;

      document.body.appendChild(script);
      insertedScripts.push(script);
    });

    return () => {
      insertedScripts.forEach((script) => {
        script.parentNode?.removeChild(script);
      });
    };
  }, [channelsKey]);

  return null;
}
