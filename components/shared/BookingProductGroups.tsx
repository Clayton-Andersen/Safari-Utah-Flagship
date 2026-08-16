import BookingCard from "@/components/shared/BookingCard";
import type { BookingProduct } from "@/lib/booking";
import { privateBookingProducts, sharedBookingProducts } from "@/lib/booking";

type BookingProductGroupsProps = {
  compact?: boolean;
};

type ProductGroupProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  products: BookingProduct[];
  compact: boolean;
};

const groupClasses =
  "rounded-3xl border border-sand/25 bg-night/50 p-4 shadow-sm md:p-6";

function ProductGroup({
  eyebrow,
  title,
  description,
  highlights,
  products,
  compact,
}: ProductGroupProps) {
  return (
    <section className={groupClasses}>
      <div className="mb-5 space-y-3 border-b border-sand/15 pb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand/70">
          {eyebrow}
        </p>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl text-bone md:text-3xl">{title}</h3>
          <p className="text-sm leading-6 text-sand/80">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-sand/20 bg-sand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-sand/80"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <BookingCard key={product.id} product={product} compact={compact} />
        ))}
      </div>
    </section>
  );
}

export default function BookingProductGroups({ compact = false }: BookingProductGroupsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ProductGroup
        eyebrow="Premium Private Experiences"
        title="Private Tours"
        description="Best for guests who want privacy, flexibility, and a more personal pace in the field."
        highlights={["Private experience", "Flexible pace", "1–4 guests"]}
        products={privateBookingProducts}
        compact={compact}
      />

      <ProductGroup
        eyebrow="Shared Group Tours"
        title="Shared Small-Group Tours"
        description="Best for guests who are comfortable joining others and want a more accessible way to experience the island."
        highlights={["Shared tour", "Per-person pricing", "Small group"]}
        products={sharedBookingProducts}
        compact={compact}
      />
    </div>
  );
}
