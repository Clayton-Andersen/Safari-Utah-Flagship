import BokunButton from "@/components/shared/BokunButton";
import type { BookingProduct } from "@/lib/booking";

type BookingActionsProps = {
  product: BookingProduct;
  bookingButtonClasses: string;
  label?: string;
};

export default function BookingActions({
  product,
  bookingButtonClasses,
  label,
}: BookingActionsProps) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <BokunButton
        buttonId={product.buttonId!}
        dataSrc={product.dataSrc!}
        label={label ?? product.buttonLabel}
        className={bookingButtonClasses}
      />

      {product.giftDataSrc && (
        <a
          href={product.giftDataSrc}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Gift ${product.title} (opens secure Bókun checkout in a new tab)`}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-sand/60 bg-night/35 px-5 py-3 text-center font-sans text-xs font-semibold uppercase tracking-[0.12em] text-sand transition hover:border-sand hover:bg-sand/10 hover:text-bone"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 shrink-0"
          >
            <rect x="3" y="8" width="18" height="13" rx="2" />
            <path d="M12 8v13M3 12h18M12 8c-3.5 0-5.5-1.3-5.5-3a2.5 2.5 0 0 1 5 0v3ZM12 8c3.5 0 5.5-1.3 5.5-3a2.5 2.5 0 0 0-5 0v3Z" />
          </svg>
          Gift This Experience
        </a>
      )}

      {product.directUrl && (
        <p className="w-full text-[11px] leading-5 text-sand/60">
          Trouble opening the calendar?{" "}
          <a
            href={product.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-sand"
          >
            open the full calendar
          </a>.
        </p>
      )}
    </div>
  );
}
