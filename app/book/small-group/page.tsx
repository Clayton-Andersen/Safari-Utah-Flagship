import { redirect } from "next/navigation";

export const metadata = {
  title: "Book the Shared Small-Group Tour | Safari Utah",
  description:
    "Book the Antelope Island Small-Group Wildlife Tour, a shared public wildlife tour on Antelope Island.",
};

export default function SmallGroupBookPage() {
  redirect("/tours/antelope-island#small-group-day");
}
