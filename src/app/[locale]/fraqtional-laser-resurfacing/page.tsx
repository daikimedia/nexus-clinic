import PageFraqtional from "@/src/views/PageFractionalLaser";
import { languages } from "@/src/i18n/settings";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <PageFraqtional />;
}
