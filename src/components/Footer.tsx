import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("HomePage");

  return <footer className="h-10 bg-accent w-full flex-center text-background">{t("footer")}</footer>;
}

export default Footer;
