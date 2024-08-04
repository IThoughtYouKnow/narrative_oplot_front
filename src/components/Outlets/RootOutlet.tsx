import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { RootLayout } from "../Layout/RootLayout";
import { Helmet } from "react-helmet-async";
import { titles } from "@src/constants/htmlTitles";

export const RootOutlet: FC = () => {
  const location = useLocation();
  const currentTitle = titles[location.pathname] || "Сканнер нарративов";

  return (
    <>
      <Helmet>
        <title>{currentTitle}</title>
      </Helmet>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </>
  );
};
