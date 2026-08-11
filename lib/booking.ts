export type BookingProduct = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  details: string[];
  bestFor: string;
  price: string;
  buttonLabel: string;
  buttonId?: string;
  dataSrc?: string;
  directUrl?: string;
  channelUuid?: string;
  fallbackHref?: string;
  fallbackLabel?: string;
  isComingSoon?: boolean;
};

export const privateBookingChannelUuid = "0e590548-6d52-498f-9513-129853da57cf";
export const smallGroupBookingChannelUuid = "af390726-dee6-4233-8c58-0c0de47938d0";

// Replace these placeholders with the new Bokun widget details once the embed code is ready.
export const newSmallGroupBookingChannelUuid = "";
export const newSmallGroupBookingDataSrc = "";
export const newSmallGroupBookingButtonId = "";

export const bookingProducts: BookingProduct[] = [
  {
    id: "private-day",
    eyebrow: "Private Day Tour",
    title: "Private Antelope Island Day Tour",
    subtitle: "Premium private wildlife tour",
    description:
      "Our most flexible private option, timed around strong daylight wildlife viewing, scenery, photography, and natural history interpretation.",
    details: [
      "Private experience for your group only",
      "Approximately 4 hours",
      "Salt Lake City area pickup and drop-off included",
      "Best for privacy, flexibility, and a tailored pace",
    ],
    bestFor:
      "Couples, families, photographers, and first-time visitors who want the island at their own pace.",
    price: "From $400 per tour (1–4 guests)",
    buttonLabel: "Book Private Day Tour",
    buttonId: "bokun_1a0059c4_a599_458b_91d5_474f465422cd",
    channelUuid: privateBookingChannelUuid,
    dataSrc: `https://widgets.bokun.io/online-sales/${privateBookingChannelUuid}/experience/1167473?partialView=1`,
    directUrl: `https://widgets.bokun.io/online-sales/${privateBookingChannelUuid}/experience/1167473`,
  },
  {
    id: "private-sunset",
    eyebrow: "Private Sunset Tour",
    title: "Private Antelope Island Sunset Tour",
    subtitle: "Longer premium evening tour",
    description:
      "A longer private outing designed for the island’s best evening light, a more atmospheric pace, and stronger photography opportunities.",
    details: [
      "Private experience for your group only",
      "Approximately 4.5 to 5 hours",
      "Salt Lake City area pickup and drop-off included",
      "Best for sunset light and a more elevated field experience",
    ],
    bestFor:
      "Guests who want sunset color, photography, and a more atmospheric finish to the day.",
    price: "From $500 per tour (1–4 guests)",
    buttonLabel: "Book Sunset Tour",
    buttonId: "bokun_0188482c_9722_4886_953e_c2bbfdb222f0",
    channelUuid: privateBookingChannelUuid,
    dataSrc: `https://widgets.bokun.io/online-sales/${privateBookingChannelUuid}/experience/1174895?partialView=1`,
    directUrl: `https://widgets.bokun.io/online-sales/${privateBookingChannelUuid}/experience/1174895`,
  },
  {
    id: "small-group-day",
    eyebrow: "Small-Group Day Tour",
    title: "Shared Antelope Island Wildlife Tour",
    subtitle: "Current shared small-group option",
    description:
      "A shared wildlife experience for guests who want expert guiding, calm pacing, and a more accessible price point without losing the personal feel.",
    details: [
      "Shared public small-group experience",
      "Approximately 4 hours",
      "Salt Lake City downtown area pickup and drop-off included",
      "Capped group size for a calmer wildlife-viewing experience",
    ],
    bestFor:
      "Guests comfortable joining others who still want a small-scale, naturalist-led outing.",
    price: "1 adult $160 · 2+ adults $140 per adult · Youth with adult $80",
    buttonLabel: "Book Small-Group Day Tour",
    buttonId: "bokun_a1e37b66_dcb1_4c28_ac37_6eca50dda10e",
    channelUuid: smallGroupBookingChannelUuid,
    dataSrc: `https://widgets.bokun.io/online-sales/${smallGroupBookingChannelUuid}/experience/1167480?partialView=1`,
    directUrl: `https://widgets.bokun.io/online-sales/${smallGroupBookingChannelUuid}/experience/1167480`,
  },
  {
    id: "small-group-rollout",
    eyebrow: "New Small-Group Tour",
    title: "New Small-Group Wildlife Tour",
    subtitle: "Rolling out soon",
    description:
      "A new shared small-group option for guests who want a simple way to join Safari Utah with expert guiding and a friendly group format.",
    details: [
      "Shared small-group experience",
      "Minimum of 2 travelers",
      "Starts at $150 per adult",
      "Youth pricing $90 per youth",
    ],
    bestFor:
      "Travelers who want the value of a shared tour while keeping the outing small, calm, and wildlife-focused.",
    price: "From $150 per adult (2-traveler minimum) · Youth $90",
    buttonLabel: "Request New Small-Group Tour",
    buttonId: newSmallGroupBookingButtonId || undefined,
    channelUuid: newSmallGroupBookingChannelUuid || undefined,
    dataSrc: newSmallGroupBookingDataSrc || undefined,
    fallbackHref: "/contact?reason=new-small-group-tour",
    fallbackLabel: "Ask About This Tour",
    isComingSoon: true,
  },
];

export const liveBookingProducts = bookingProducts.filter(
  (product) => product.buttonId && product.dataSrc && product.channelUuid
);

export const bookingChannelUuids = Array.from(
  new Set(liveBookingProducts.map((product) => product.channelUuid).filter(Boolean))
) as string[];

export function getBookingProduct(id: string) {
  return bookingProducts.find((product) => product.id === id);
}
