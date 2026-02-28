import HomePageNexus from "@/src/views/HomePage";
import { languages } from "../../i18n/settings";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <HomePageNexus locale={locale} />;
}