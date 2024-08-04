import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#101b2d",
      accent: "#12233f",
    },
    text: {
      primary: "#e8e8e8",
    },
  },
});
