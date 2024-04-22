import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { setLang } from "./app/Features/MiscellaneousSlice.tsx";
import { useAppDispatch } from "./app/reduxHooks.ts";

function App() {
  const { i18n } = useTranslation("");
  const dispatchRedux = useAppDispatch();
  //!we use startsWith instead of ==== whereas some languages codes consist of 2 words as en-us but the language in the url always consists of one word
  useEffect(() => {
    dispatchRedux(setLang(i18n.language?.startsWith("ar") ? "ar" : "en"));

    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language?.startsWith("ar")
      ? "ar"
      : "en";
  }, [dispatchRedux, i18n.language]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Navigate to={`/${i18n.language?.startsWith("ar") ? "ar" : "en"}`} />
      ),
    },
    {
      path: `/${i18n.language?.startsWith("ar") ? "ar" : "en"}`,
      lazy: () => import("./Pages/HomePage/HomePage.tsx"),
    },
    {
      path: "not-found",
      lazy: () => import("./components/NotFound.tsx"),
    },
  ]);

  return <RouterProvider router={router} />;
  /*   return <RouterProvider router={router} fallbackElement={< Loader />} />;
   */
}

export default App;
