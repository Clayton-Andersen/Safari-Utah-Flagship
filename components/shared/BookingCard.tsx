import Link from "next/link";
import type { BookingProduct } from "@/lib/booking";
import BokunButton from "@/components/shared/BokunButton";

const primaryButtonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

const secondaryButtonClasses =
  "inline-flex items-center justify-center rounded-full border border-sand/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sand transition hover:bg-sand hover:text-night";

type BookingCardProps = {
  product: BookingProduct;
  compact?: boolean;
};

export default function BookingCard({ product, compact = false }: BookingCardProps) {
  const hasLiveWidget = product.buttonId && product.dataSrc;

  return (
    <article
      id={product.id}
      className="flex h-full flex-col space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6 text-sm text-sand/85"
    >
      <div className="space-y-3 border-b border-sand/15 pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/70">
          {product.eyebrow}
        </p>
        <div className="space-y-1">
          <h3 className="font-serif text-2xl text-bone">{product.title}</h3>
          {product.subtitle && <p className="text-sm text-sand/70">{product.subtitle}</p>}
        </div>
      </div>

      <p className="leading-7">{product.description}</p>

      <ul className="list-disc space-y-1 pl-5">
        {product.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <p className="font-medium text-bone">{product.price}</p>

      {!compact && (
        <p className="text-sm leading-6 text-sand/80">
          <span className="font-semibold text-bone">Best for:</span> {product.bestFor}
        </p>
      )}

      <div className="mt-auto pt-2">
        {hasLiveWidget ? (
          <BokunButton
            buttonId={product.buttonId!}
            dataSrc={product.dataSrc!}
            directUrl={product.directUrl}
            label={product.buttonLabel}
            className={primaryButtonClasses}
          />
        ) : product.fallbackHref ? (
          <div className="space-y-2">
            <Link href={product.fallbackHref} className={secondaryButtonClasses}>
              {product.fallbackLabel ?? product.buttonLabel}
            </Link>
            {product.isComingSoon ? (
              <p className="text-[11px] leading-5 text-sand/65">
                Online booking will be added here as soon as the new Bokun widget is ready.
              </p>
            ) : (
              <p className="text-[11px] leading-5 text-sand/65">
                Opens a dedicated booking page so Bokun does not mix booking channels on this page.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}
