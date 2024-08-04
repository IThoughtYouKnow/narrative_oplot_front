import {
  Box,
  Divider,
  lighten,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { GreenHouseLogo } from "@src/assets/greenhouseLogo";
import MuiLink from "@mui/material/Link";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import AssessmentIcon from "@mui/icons-material/AssessmentOutlined";
import ScienceIcon from "@mui/icons-material/ScienceOutlined";
import CloudDownloadIcon from "@mui/icons-material/CloudDownloadOutlined";
import ContactMailIcon from "@mui/icons-material/ContactMailOutlined";

const menuLinks = [
  {
    page: "about",
    label: "О проекте",
    IconComponent: <InfoIcon color="info" />,
  },
  {
    page: "examples",
    label: "Примеры использования",
    IconComponent: <AssessmentIcon color="success" />,
  },
  {
    page: "methodology",
    label: "Методология",
    IconComponent: <ScienceIcon color="warning" />,
  },
  {
    page: "download",
    label: "Скачать данные",
    IconComponent: <CloudDownloadIcon color="primary" />,
  },
  {
    page: "contacts",
    label: "Свяжитесь с нами",
    IconComponent: <ContactMailIcon color="secondary" />,
  },
];

export const SidebarMenu = () => {
  const location = useLocation();
  return (
    <Stack gap={4}>
      <Typography variant="h5">Сканнер нарративов</Typography>
      <Divider />
      <List>
        {menuLinks.map(({ label, page, IconComponent }) => {
          const isActive = location.pathname.includes(page);
          return (
            <ListItem key={label} disablePadding>
              <ListItemButton component={Link} to={page}>
                <ListItemIcon>{IconComponent}</ListItemIcon>
                <ListItemText
                  primary={label}
                  sx={(theme) => ({
                    ...(isActive && { color: theme.palette.success.main }),
                  })}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <MuiLink
        sx={(theme) => ({
          height: 140,
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          background: theme.palette.background.accent,
          borderRadius: "5px",
        })}
        color="text.primary"
        href="https://te-st.org/"
        target="_blank"
        underline="hover"
      >
        <GreenHouseLogo sx={{ height: "100px", width: "auto" }} />
        <Typography>
          Теплица
          <br />
          Социальных
          <br />
          Технологий
        </Typography>
      </MuiLink>
    </Stack>
  );
};
