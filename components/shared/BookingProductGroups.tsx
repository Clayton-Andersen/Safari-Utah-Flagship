import BookingCard from "@/components/shared/BookingCard";
import type { BookingProduct } from "@/lib/booking";
import { privateBookingProducts, sharedBookingProducts } from "@/lib/booking";

type BookingProductGroupsProps = {
  compact?: boolean;
};

type ProductGroupVariant = "private" | "shared";

type ProductGroupProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  products: BookingProduct[];
  compact: boolean;
  variant: ProductGroupVariant;
};

const groupClasses: Record<ProductGroupVariant, string> = {
  private:
    "rounded-3xl border border-sand/40 bg-sand/[0.08] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] ring-1 ring-sand/10 md:p-7",
  shared:
    "rounded-3xl border border-bone/25 bg-bone/[0.05] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] ring-1 ring-bone/10 md:p-7",
};

const headerClasses: Record<ProductGroupVariant, string> = {
  private: "mb-5 space-y-3 rounded-2xl border border-sand/20 bg-night/35 p-4 md:p-5",
  shared: "mb-5 space-y-3 rounded-2xl border border-bone/15 bg-night/45 p-4 md:p-5",
};

const badgeClasses: Record<ProductGroupVariant, string> = {
  private:
    "rounded-full border border-sand/25 bg-sand/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-sand/90",
  shared:
    "rounded-full border border-bone/20 bg-bone/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-sand/85",
};

function ProductGroup({
  eyebrow,
  title,
  description,
  highlights,
  products,
  compact,
  variant,
}: ProductGroupProps) {
  return (
    <section className={groupClasses[variant]}>
      <div className={headerClasses[variant]}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand/70">
          {eyebrow}
        </p>
        <div className="space-y-2">
          <h2 className="font-serif text-2xl text-bone md:text-3xl">{title}</h2>
          <p className="text-sm leading-6 text-sand/80">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span key={highlight} className={badgeClasses[variant]}>
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
    <div className="grid gap-8 lg:grid-cols-2">
      <ProductGroup
        eyebrow="Private Experiences"
        title="Private Tours"
        description="Best for guests who want their group only, flexible pacing, and a more personal day in the field."
        highlights={["Private vehicle", "Flexible pace", "1 to 4 guests"]}
        products={privateBookingProducts}
        compact={compact}
        variant="private"
      />

      <ProductGroup
        eyebrow="Shared Small-Group Experiences"
        title="Small-Group Tours"
        description="Best for guests who are comfortable joining others and want expert guiding with per-person pricing."
        highlights={["Shared tour", "Per-person pricing", "Small group"]}
        products={sharedBookingProducts}
        compact={compact}
        variant="shared"
      />
    </div>
  );
}
