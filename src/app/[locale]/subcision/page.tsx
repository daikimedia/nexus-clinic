import PageSubcision from "@/src/views/PageSubcision";
import { languages } from "@/src/i18n/settings";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <PageSubcision />;
}
