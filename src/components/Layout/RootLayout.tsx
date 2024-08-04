import { Container, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { SidebarMenu } from "./SidebarMenu";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container sx={{ minHeight: "99vh", pt: "45px" }}>
      <Stack direction="row">
        <Stack sx={{ width: 300, flexShrink: 0 }}>
          <SidebarMenu />
        </Stack>
        <Stack sx={{ p: "0 16px 16px 32px" }}>{children}</Stack>
      </Stack>
    </Container>
  );
};
