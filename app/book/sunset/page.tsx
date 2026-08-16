import { redirect } from "next/navigation";

export const metadata = {
  title: "Book the Private Sunset Tour | Safari Utah",
  description:
    "Book the Premium Antelope Island Elite Sunset Tour, a private evening wildlife tour on Antelope Island.",
};

export default function SunsetBookPage() {
  redirect("/tours/antelope-island#private-sunset");
}
