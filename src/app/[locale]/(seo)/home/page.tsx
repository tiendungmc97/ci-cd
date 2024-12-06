import { useTranslations } from "next-intl";

export interface IHomeProps {}

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      {t("title")}
      <div className="flex border-spacing-0 justify-start pe-4 ps-0">test</div>
      <div>hello</div>
    </div>
  );
}
