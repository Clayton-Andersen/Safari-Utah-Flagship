"use client";

type Props = {
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function BookingButton({ size = "md", label }: Props) {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-sand text-night uppercase tracking-[0.2em] hover:bg-bone transition ${sizeClasses[size]}`}
    >
      {label ?? "Book Now"}
    </a>
  );
}
