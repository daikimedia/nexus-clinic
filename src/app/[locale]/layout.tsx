import { dir } from "i18next";
import { languages } from "@/src/i18n/settings";
import Navbar from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className="font-inter">
        <Navbar locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
