import InfoIcon from "@mui/icons-material/InfoOutlined";
import AssessmentIcon from "@mui/icons-material/AssessmentOutlined";
import ScienceIcon from "@mui/icons-material/ScienceOutlined";
import CloudDownloadIcon from "@mui/icons-material/CloudDownloadOutlined";
import ContactMailIcon from "@mui/icons-material/ContactMailOutlined";

export const ROUTE = {
  about: { to: "/about", IconComponent: <InfoIcon color="info" /> },
  examples: {
    to: "/examples",
    IconComponent: <AssessmentIcon color="success" />,
  },
  methodology: {
    to: "/methodology",
    IconComponent: <ScienceIcon color="warning" />,
  },
  download: {
    to: "/download",
    IconComponent: <CloudDownloadIcon color="primary" />,
  },
  contacts: {
    to: "/contacts",
    IconComponent: <ContactMailIcon color="secondary" />,
  },
};
