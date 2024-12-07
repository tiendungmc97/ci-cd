import LocaleSwitcher from "@/app/components/LocaleSwitcher";
import { unstable_setRequestLocale } from "next-intl/server";
import * as React from "react";

export interface ISeoLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
const test = {
  test: "test",
};
export default function SeoLayout(props: ISeoLayoutProps) {
  unstable_setRequestLocale(props.params.locale);
  const { children } = props;
  return (
    <html>
      <body>
        <div className="flex h-10 w-screen justify-between bg-gray-100">
          <div></div>
          <LocaleSwitcher />
        </div>
        {children}
      </body>
    </html>
  );
}
