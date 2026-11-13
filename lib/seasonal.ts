export const holidayGiftDismissalCookie = "safari_utah_holiday_gift_dismissed";

export function isHolidayGiftSeason(date: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Denver",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  return month === 11 || month === 12 || (month === 1 && day <= 2);
}
