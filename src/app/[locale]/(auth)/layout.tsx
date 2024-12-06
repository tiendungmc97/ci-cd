import LocaleSwitcher from "@/app/components/LocaleSwitcher";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
export interface ISeoLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function SeoLayout(props: ISeoLayoutProps) {
  unstable_setRequestLocale(props.params.locale);
  const { children } = props;
  const test = ["a", "b", "c"];
  return (
    <html>
      <body>
        <div className="flex h-10 w-screen justify-between bg-gray-100">
          <div>hello world</div>
          <div>
            {test.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <LocaleSwitcher />
        </div>
        {children}
      </body>
    </html>
  );
}
