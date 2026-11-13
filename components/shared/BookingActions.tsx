import BokunButton from "@/components/shared/BokunButton";
import GiftPurchaseDisclosure from "@/components/shared/GiftPurchaseDisclosure";
import type { BookingProduct } from "@/lib/booking";

type BookingActionsProps = {
  product: BookingProduct;
  bookingButtonClasses: string;
  label?: string;
};

export default function BookingActions({ product, bookingButtonClasses, label }: BookingActionsProps) {
  return (
    <div className="grid items-start gap-3 sm:grid-cols-2">
      <BokunButton
        buttonId={product.buttonId!}
        dataSrc={product.dataSrc!}
        directUrl={product.directUrl}
        label={label ?? product.buttonLabel}
        className={bookingButtonClasses}
      />
      <GiftPurchaseDisclosure product={product} />
    </div>
  );
}
