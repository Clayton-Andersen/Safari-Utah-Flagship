import { redirect } from "next/navigation";

export const metadata = {
  title: "Book the Private Day Tour | Safari Utah",
  description:
    "Book the Premium Antelope Island Tour, a private daytime wildlife tour on Antelope Island.",
};

export default function PrivateBookPage() {
  redirect("/tours/antelope-island#private-day");
}
