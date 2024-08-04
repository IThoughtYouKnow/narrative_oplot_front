/// <reference types="vite/client" />

import "@mui/material/styles/createPalette";

declare global {
  declare module "swagger-typescript-api" {
    interface GenerateApiParamsBase {
      apiClassName: string;
    }
  }
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    accent: string;
  }
}
