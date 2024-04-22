import { FallbackProps } from "react-error-boundary";
import img from "/assets/error.png";

import { useTranslation } from "react-i18next";
import HelmetTags from "./HelmetTags";

export default function ErrorBoundaryFallback(props: FallbackProps) {
  const { error, resetErrorBoundary } = props;
  const { t } = useTranslation("Pages_ErrorBoundaryFallback");

  return (
    <section className=" min-h-screen  w-full  text-error ">
      <HelmetTags
        title={t("tab.title")}
        description={t("tab.description")}
        index={false}
      />
    
      <section className="flex  items-center justify-center min-h-[calc(100vh-96px)] w-full  py-20 ">
        <div className="flex-center gap-10 site_container md:flex-col md:items-center ">
          <div className="w-1/2  md:w-full flex justify-center">
            <img className="" src={img} alt="error" />
          </div>

          <div className="w-1/2  md:w-full flex flex-col md:items-center">
            <h1 className="font-bold text-7xl">{t("heading")}</h1>
            <h2 className="font-medium text-2xl my-3">{t("sub_heading")}</h2>
            <p className="text-red-500">{error.message}</p>

            <button
              className="!w-fit mx mt-5 underline underline-offset-4  "
              id="custom__btn"
              onClick={resetErrorBoundary}
            >
              <span>{t("CTA_txt")}</span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
