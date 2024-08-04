import { Typography } from "@mui/material";
import { RootOutlet } from "@src/components/Outlets/RootOutlet";
import { AboutPage, ContactsPage } from "@src/components/pages";
import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const RootRouter: FC = () => {
  console.log("object");
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route path="/" element={<RootOutlet />}>
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/examples"
            element={<Typography variant="body1">examples page</Typography>}
          />
          <Route
            path="/methodology"
            element={<Typography variant="body1">methodology page</Typography>}
          />
          <Route
            path="/download"
            element={<Typography variant="body1">download page</Typography>}
          />
          <Route path="/contacts" element={<ContactsPage />} />

          <Route index element={<Navigate to="about" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
