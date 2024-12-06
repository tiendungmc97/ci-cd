import { useTranslations } from "next-intl";

export interface IHomeProps {}

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      {t("title")}
      <div>test</div>

      <div>hello</div>
    </div>
  );
}
