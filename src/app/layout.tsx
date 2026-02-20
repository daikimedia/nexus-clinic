import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Clinic - Aesthetic & Weight Loss Clinic in KL",
  description:
    "Advanced aesthetic and medical weight loss clinic in Kuala Lumpur. Where science meets artistry for your natural beauty.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
