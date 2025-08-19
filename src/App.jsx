import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import AncientMonuments from "@/pages/AncientMonuments";
import MovableAntiquities from "@/pages/MovableAntiquities";
import Main from "./pages/Main";
import ControlledAreas from "./pages/ControlledAreas";
import AreasUnderReq from "./pages/AreasUnderReq";
import SurveyedAreas from "./pages/SurveyedAreas";


function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Main />} />
          <Route path="ancient-monuments" element={<AncientMonuments />} />
          <Route path="movable-antiquities" element={< MovableAntiquities/>} />
          <Route path="controlled-areas" element={<ControlledAreas />} />
          <Route path="areas-under-temp-requisition" element={<AreasUnderReq />} />
          <Route path="surveyed-areas" element={<SurveyedAreas />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
