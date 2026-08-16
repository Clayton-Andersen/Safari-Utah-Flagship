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

export const websiteBookingChannelUuid = "af390726-dee6-4233-8c58-0c0de47938d0";

function bookingCalendarDataSrc(experienceId: string) {
  return `https://widgets.bokun.io/online-sales/${websiteBookingChannelUuid}/experience-calendar/${experienceId}?partialView=1`;
}

function bookingCalendarDirectUrl(experienceId: string) {
  return `https://widgets.bokun.io/online-sales/${websiteBookingChannelUuid}/experience-calendar/${experienceId}`;
}

export const bookingProducts: BookingProduct[] = [
  {
    id: "private-day",
    eyebrow: "Private Day Tour",
    title: "Private Day Tour",
    subtitle: "Premium Antelope Island Private Tour",
    description:
      "Our most flexible private option, timed around the best daylight hours for wildlife viewing and scenery.",
    details: [
      "Private experience for your group only",
      "Approximately 4 hours",
      "From $450 per private tour",
      "1 to 4 guests",
    ],
    bestFor:
      "couples, families, photographers, and first-time visitors who want a private wildlife tour at their own pace.",
    price: "From $450 per private tour",
    buttonLabel: "Book Private Day Tour",
    buttonId: "bokun_6770ef37_2262_4bd4_a862_98443237beee",
    channelUuid: websiteBookingChannelUuid,
    dataSrc: bookingCalendarDataSrc("1167473"),
    directUrl: bookingCalendarDirectUrl("1167473"),
  },
  {
    id: "private-sunset",
    eyebrow: "Private Sunset Tour",
    title: "Private Sunset Tour",
    subtitle: "Premium Antelope Island Private Sunset Tour",
    description:
      "A longer private outing designed for guests who want the island’s best evening light and a more atmospheric finish to the day.",
    details: [
      "Private experience for your group only",
      "Approximately 4.5 to 5 hours",
      "From $500 per private tour",
      "1 to 4 guests",
    ],
    bestFor:
      "guests who want sunset light, stronger photography opportunities, and a more elevated feel in the field.",
    price: "From $500 per private tour",
    buttonLabel: "Book Private Sunset Tour",
    buttonId: "bokun_77e6f96b_8c3c_48f3_bf84_79e7685209dd",
    channelUuid: websiteBookingChannelUuid,
    dataSrc: bookingCalendarDataSrc("1174895"),
    directUrl: bookingCalendarDirectUrl("1174895"),
  },
  {
    id: "small-group-day",
    eyebrow: "Small-Group Tour",
    title: "Small-Group Tour",
    subtitle: "Antelope Island Shared Small-Group Tour",
    description:
      "A shared public tour for guests who want expert guiding, a calm pace, and a lower entry price while still keeping the experience small-scale.",
    details: [
      "Shared small-group experience",
      "Approximately 4 hours",
      "1 adult $160",
      "2+ adults $140 per adult",
      "Youth with adult $80",
    ],
    bestFor:
      "guests who are comfortable joining others and want a more accessible way to experience the island without losing the value of expert guiding.",
    price: "1 adult $160 · 2+ adults $140 per adult · Youth with adult $80",
    buttonLabel: "Book Small-Group Day Tour",
    buttonId: "bokun_142451be_f15a_4593_abed_c47faf534b52",
    channelUuid: websiteBookingChannelUuid,
    dataSrc: bookingCalendarDataSrc("1167480"),
    directUrl: bookingCalendarDirectUrl("1167480"),
  },
  {
    id: "small-group-sunset",
    eyebrow: "Small-Group Sunset Tour",
    title: "Great Salt Lake Sunset Safari Tour",
    subtitle: "Sunset, Wildlife and Nature Tour",
    description:
      "A shared sunset outing across Antelope Island, timed for evening light, Great Salt Lake views, wildlife, birding, photography, and natural history interpretation.",
    details: [
      "Shared small-group sunset experience",
      "Adult $150",
      "Youth with adult $90",
      "Wildlife, birding, and photography stops as conditions allow",
      "Optional short Buffalo Point walk for panoramic sunset views",
    ],
    bestFor:
      "guests who want a shared sunset experience with wildlife viewing, lake scenery, birding, photography, and a relaxed safari-style pace.",
    price: "Adult $150 · Youth with adult $90",
    buttonLabel: "Book Small-Group Sunset Tour",
    buttonId: "bokun_f5842ef1_0805_420e_9850_7f3bbe3a0beb",
    channelUuid: websiteBookingChannelUuid,
    dataSrc: bookingCalendarDataSrc("1265851"),
    directUrl: bookingCalendarDirectUrl("1265851"),
  },
];

export const privateBookingProducts = bookingProducts.filter((product) =>
  ["private-day", "private-sunset"].includes(product.id)
);

export const sharedBookingProducts = bookingProducts.filter((product) =>
  ["small-group-day", "small-group-sunset"].includes(product.id)
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
