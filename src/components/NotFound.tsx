import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LangLink from "./LangLink";
import HelmetTags from "./HelmetTags";
export function Component() {
  const { t, i18n } = useTranslation("Pages_NotFound");

  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";

  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${lang}`);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [lang, navigate]);

  return (
    <section className="flex-col flex items-center justify-center w-full min-h-[calc(100vh-180px)]">
      <HelmetTags
        title={t("tab.title")}
        description={t("tab.description")}
        index={false}
      />
      <h2 className="text-4xl  font-semibold max-w-6xl mx-auto text-center text-balance ">
        {t("txt")}
      </h2>
      
        <LangLink className="mx-auto mt-10 underline underline-offset-4" to="">
          {t("CTA_txt")}
        </LangLink>
    </section>
  );
}
