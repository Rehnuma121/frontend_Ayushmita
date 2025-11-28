import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import TreatmentPage from "./pages/TreatmentPage";
import TreatmentsDetailsPage from "./pages/TreatmentsDetailsPage";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* When a tab is clicked → /treatments/:category */}
        <Route path="/treatmentdetails" element={<TreatmentsDetailsPage />} />

        <Route path="/treatment" element={<TreatmentPage />} />
      </Routes>
    </HelmetProvider>
  );
};

export default App;
