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
export const newSmallGroupBookingChannelUuid = "0e590548-6d52-498f-9513-129853da57cf";
export const newSmallGroupBookingDataSrc =
  `https://widgets.bokun.io/online-sales/${newSmallGroupBookingChannelUuid}/experience/1265851?partialView=1`;
export const newSmallGroupBookingDirectUrl =
  `https://widgets.bokun.io/online-sales/${newSmallGroupBookingChannelUuid}/experience/1265851`;
export const newSmallGroupBookingButtonId = "bokun_692ba05c_86f0_4fa6_8e87_92790aa41b09";

export const bookingProducts: BookingProduct[] = [
  {
    id: "private-day",
    eyebrow: "Private Day Tour",
    title: "Private Day Tour",
    subtitle: "Premium Antelope Island Private Tour",
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
    title: "Private Sunset Tour",
    subtitle: "Premium Antelope Island Private Sunset Tour",
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
    eyebrow: "Small-Group Tour",
    title: "Small-Group Tour",
    subtitle: "Antelope Island Shared Small-Group Tour",
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
    fallbackHref: "/book/small-group",
    fallbackLabel: "Book Small-Group Day Tour",
  },
  {
    id: "small-group-rollout",
    eyebrow: "Shared Group Sunset Tour",
    title: "Great Salt Lake Sunset Safari Tour",
    subtitle: "Sunset, Wildlife and Nature Tour",
    description:
      "A shared sunset outing across Antelope Island, timed for evening light, Great Salt Lake views, wildlife, birding, photography, and natural history interpretation.",
    details: [
      "Scenic drive with Great Salt Lake and Wasatch Mountain views",
      "Wildlife, birding, and photography stops as conditions allow",
      "Ecology and geology interpretation throughout the tour",
      "Optional short Buffalo Point walk for panoramic sunset views",
      "April–June gnats may mean more time in the vehicle",
    ],
    bestFor:
      "Guests who want a shared sunset experience with wildlife viewing, lake scenery, birding, photography, and a relaxed safari-style pace.",
    price: "From $150 per adult (2-traveler minimum) · Youth $90",
    buttonLabel: "Book Shared Great Salt Lake Sunset Safari",
    buttonId: newSmallGroupBookingButtonId,
    channelUuid: newSmallGroupBookingChannelUuid,
    dataSrc: newSmallGroupBookingDataSrc,
    directUrl: newSmallGroupBookingDirectUrl,
  },
];

export const privateBookingProducts = bookingProducts.filter((product) =>
  ["private-day", "private-sunset"].includes(product.id)
);

export const sharedBookingProducts = bookingProducts.filter((product) =>
  ["small-group-day", "small-group-rollout"].includes(product.id)
);

export const liveBookingProducts = bookingProducts.filter(
  (product) => product.buttonId && product.dataSrc && product.channelUuid
);

export const bookingChannelUuids = Array.from(
  new Set(liveBookingProducts.map((product) => product.channelUuid).filter(Boolean))
) as string[];

export function getBookingProduct(id: string) {
  return bookingProducts.find((product) => product.id === id);
}
