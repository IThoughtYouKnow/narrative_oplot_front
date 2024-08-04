import { LinkProps, Link as MuiLink, Stack } from "@mui/material";
import { ROUTE } from "@src/constants/routes";
import { FC, PropsWithChildren } from "react";
import { Link as RouterDomLink } from "react-router-dom";

type RouterLinkProps = {
  to: keyof typeof ROUTE;
  withIcon?: boolean;
} & Omit<LinkProps, "to">;

export const RouterLink: FC<RouterLinkProps & PropsWithChildren> = ({
  to,
  children,
  withIcon,
  ...rest
}) =>
  withIcon ? (
    <MuiLink component={RouterDomLink} to={ROUTE[to].to} {...rest}>
      <Stack direction="row" gap={1}>
        {withIcon && ROUTE[to].IconComponent}
        {children}
      </Stack>
    </MuiLink>
  ) : (
    <MuiLink component={RouterDomLink} to={ROUTE[to].to} {...rest}>
      {children}
    </MuiLink>
  );
