import PageDuromineMalaysia from "@/src/views/weightlossTreatment/Duromine";
import { languages } from "@/src/i18n/settings";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PageDuromineMalaysia locale={locale} />;
}
