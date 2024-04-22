import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { setLang } from "./app/Features/MiscellaneousSlice.tsx";
import { useAppDispatch } from "./app/reduxHooks.ts";
function App() {
  const { i18n } = useTranslation("");
  const dispatchRedux = useAppDispatch();
  const lng = i18n.language?.startsWith("ar") ? "ar" : "en";
  //!we use startsWith instead of ==== whereas some languages codes consist of 2 words as en-us but the language in the url always consists of one word
  useEffect(() => {
    dispatchRedux(setLang(lng));
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language?.startsWith("ar")
      ? "ar"
      : "en";
  }, [dispatchRedux, i18n.language]);

  const router = createBrowserRouter([
    {
      path: "/en",
      lazy: () => import("./Pages/HomePage/HomePage.tsx"),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
