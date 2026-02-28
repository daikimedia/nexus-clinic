import SimaglutideLanding from "@/src/views/weightlossTreatment/SimaglutideInjection";
import { languages } from "@/src/i18n/settings";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <SimaglutideLanding locale={locale} />;
}
