import PageSaxendaMalaysia from "@/src/views/PageSexandaMalaysia";
import { languages } from "@/src/i18n/settings";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <PageSaxendaMalaysia />;
}
