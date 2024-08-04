import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { darkTheme } from "./theme";
import { HelmetProvider } from "react-helmet-async";

const App = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Suspense fallback={<>...loading</>}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  </ThemeProvider>
);
