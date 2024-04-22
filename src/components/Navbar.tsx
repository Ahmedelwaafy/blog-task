import { useTranslation } from "react-i18next";
import NavSearch from "./NavSearch";
import Container from "./Container";

function Navbar() {
  const { t, i18n } = useTranslation("HomePage");
  const lng = i18n.language;
  function changeLanguage(lang: string) {
    if (lng !== lang) {
      i18n.changeLanguage(lang);
      window.location.replace(window.location.href.replace(lng, lang));
    }
  }
  return (
    <>
      <header className="w-full bg-accent h-20 sm:h-32 sticky top-0 z-50">
        <nav className=" w-full h-full sm:flex-col-center sm:gap-3">
          <Container className="  h-full sm:h-fit flex justify-between items-center">
            <div className="logo text-3xl lg:te">
              <span>Logo</span>
              <span>Logo</span>
              <h3 className="invisible">Logo</h3>
            </div>
            <NavSearch t={t} lng={lng} className="sm:hidden" />
            <div className="Navbar__LanguageChanger flex gap-1  text-background">
              <button
                className={`trns hover:opacity-100  ${
                  lng === "en" ? "font-bold " : "opacity-70"
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              /
              <button
                className={`trns hover:opacity-100  ${
                  lng === "ar" ? "font-bold " : "opacity-70"
                }`}
                onClick={() => changeLanguage("ar")}
              >
                AR
              </button>
            </div>
          </Container>
          <NavSearch t={t} lng={lng} className="hidden sm:block" />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
