import type { BookingProduct } from "@/lib/booking";

type GiftPurchaseDisclosureProps = {
  product: BookingProduct;
};

export default function GiftPurchaseDisclosure({ product }: GiftPurchaseDisclosureProps) {
  if (!product.giftDataSrc || !product.giftWidgetId) return null;

  return (
    <details className="group min-w-0 rounded-2xl border border-sand/35 bg-night/55 open:sm:col-span-2">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-sand transition hover:bg-sand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand [&::-webkit-details-marker]:hidden">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
          <rect x="3" y="8" width="18" height="13" rx="2" />
          <path d="M12 8v13M3 12h18M12 8c-3.5 0-5.5-1.3-5.5-3a2.5 2.5 0 0 1 5 0v3ZM12 8c3.5 0 5.5-1.3 5.5-3a2.5 2.5 0 0 0-5 0v3Z" />
        </svg>
        Gift This Experience
        <span className="sr-only">: {product.title}</span>
      </summary>
      <div className="border-t border-sand/20 px-4 pb-5 pt-4 sm:px-6">
        <p className="mb-4 text-sm leading-6 text-sand/85">
          Purchase a gift for {product.title.toLowerCase()}. Your recipient can choose an available date later.
        </p>
        {/* The Bókun loader initializes this container already present in the initial DOM.
            Do not conditionally mount the widget when the disclosure is opened. */}
        <div className="bokunWidget min-h-40 w-full" data-src={product.giftDataSrc} />
        <p className="mt-3 text-xs leading-5 text-sand/70">
          If the gift checkout does not appear,{" "}
          <a href={product.giftDataSrc} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-bone">
            open the secure gift checkout
          </a>.
        </p>
      </div>
    </details>
  );
}
