import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AncientMonuments from "@/pages/AncientMonuments/Main";
import MovableAntiquities from "@/pages/MovableAntiquities";
import Main from "./pages/Main";
import ControlledAreas from "./pages/ControlledAreas";
import AreasUnderReq from "./pages/AreasUnderReq";
import SurveyedAreas from "./pages/SurveyedAreas";
import AncientMonumentsEditAll from "./pages/AncientMonuments/EditAll";
import PagesLayout from "./layouts/PagesLayout";
import AncientMonumentsAdd from "./pages/AncientMonuments/Add";
import AncientMonumentsSearch from "./pages/AncientMonuments/Search";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route element={<PagesLayout />}>
            <Route path="ancient-monuments">
              <Route index element={<AncientMonuments />} />
              <Route path="edit" element={<AncientMonumentsEditAll />} />
              <Route path="add" element={<AncientMonumentsAdd />} />
              <Route path="search" element={<AncientMonumentsSearch />} />
            </Route>
            <Route
              path="movable-antiquities"
              element={<MovableAntiquities />}
            />
            <Route path="controlled-areas" element={<ControlledAreas />} />
            <Route
              path="areas-under-temp-requisition"
              element={<AreasUnderReq />}
            />
            <Route path="surveyed-areas" element={<SurveyedAreas />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
