import { useTranslation } from "react-i18next";
import { HelmetTags, PostsList } from "../../components";

export function Component() {
  const { t } = useTranslation("HomePage");

  return (
    <>
      <HelmetTags
        title={t("tab.title")}
        description={t("tab.description")}
        canonical=""
      />
      <PostsList t={t} />
    </>
  );
}
