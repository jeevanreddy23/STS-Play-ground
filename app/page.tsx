import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Pile Inspection 3D",
  description: "Interactive 3D pile inspection plan and socket-depth visualisation.",
};

export default function Home() {
  redirect("/pile-inspection-3d.html");
}
