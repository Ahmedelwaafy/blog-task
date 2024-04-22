import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { setLang } from "./app/Features/MiscellaneousSlice.tsx";
import { useAppDispatch } from "./app/reduxHooks.ts";
import Layout from "./components/Layout.tsx";
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
      children: [
        {
          element: <Layout />,
          children: [
            {
              index: true,
              //!react router built-in lazy loading component
              lazy: () => import("./Pages/HomePage/HomePage.tsx"),
            },
            {
              path: "search",
              lazy: () => import("./Pages/HomePage/HomePage.tsx"),
            },
          ],
        },
        {
          path: "not-found",
          lazy: () => import("./components/NotFound.tsx"),
        },
      ],
    },
    //!NotFound
    {
      path: "*",
      lazy: () => import("./components/NotFound.tsx"),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
