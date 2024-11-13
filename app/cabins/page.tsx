"use client";
import { useTranslation } from "next-i18next";
// export const metadata = {
//   title: "Cabins",
// };
export default function Page() {
  const { t } = useTranslation("common");

  return <h1>{t("welcome")}</h1>;
}
