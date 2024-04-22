import { useTranslation } from "react-i18next";
import { HelmetTags, PostsList } from "../../components";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "../../components/ErrorBoundaryFallback";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export function Component() {
  const { t } = useTranslation("HomePage");

  return (
    <>
      {" "}
      <Navbar />
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <HelmetTags
          title={t("tab.title")}
          description={t("tab.description")}
          canonical=""
        />
        <PostsList t={t} />{" "}
      </ErrorBoundary>
      <Footer />
    </>
  );
}
