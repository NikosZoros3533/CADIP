import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AncientMonuments from "@/pages/AncientMonuments/Main";
import MovableAntiquities from "@/pages/MovableAntiquities/Main";
import Main from "./pages/Main";
import ControlledAreas from "./pages/ControlledAreas/Main";
import AreasUnderReq from "./pages/AreasUnderReq/Main";
import SurveyedAreas from "./pages/SurveyedAreas/Main";
import PagesLayout from "./layouts/PagesLayout";
import AncientMonumentsAdd from "./pages/AncientMonuments/Add";
import AncientMonumentsSearch from "./pages/AncientMonuments/Search";
import AreasUnderReqAdd from "./pages/AreasUnderReq/Add";
import AreasUnderReqSearch from "./pages/AreasUnderReq/Search";
import MovableAntiquitiesAdd from "./pages/MovableAntiquities/Add";
import MovableAntiquitiesSearch from "./pages/MovableAntiquities/Search";
import ControlledAreasAdd from "./pages/ControlledAreas/Add";
import ControlledAreasSearch from "./pages/ControlledAreas/Search";
import SurveyedAreasAdd from "./pages/SurveyedAreas/Add";
import SurveyedAreasSearch from "./pages/SurveyedAreas/Search";
import Detail from "./pages/AncientMonuments/Detail";
import ItemEdit from "./pages/AncientMonuments/ItemEdit";
import AreasDetail from "./pages/AreasUnderReq/Detail";
import AreasItemEdit from "./pages/AreasUnderReq/ItemEdit";
import ControlledDetail from "./pages/ControlledAreas/Detail";
import ControlledEdit from "./pages/ControlledAreas/ItemEdit";
import MovableDetail from "./pages/MovableAntiquities/Detail";
import MovableEdit from "./pages/MovableAntiquities/ItemEdit";
import SurveyedDetail from "./pages/SurveyedAreas/Detail";
import SurveyedEdit from "./pages/SurveyedAreas/ItemEdit";


function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route element={<PagesLayout />}>
            <Route path="ancient-monuments">
              <Route index element={<AncientMonuments />} />
              <Route path="add" element={<AncientMonumentsAdd />} />
              <Route path="search" element={<AncientMonumentsSearch />} />
              <Route path=":id" element={<Detail />} />
              <Route path=":id/edit" element={<ItemEdit />} />
            </Route>
            <Route path="movable-antiquities">
              <Route index element={<MovableAntiquities />} />
              <Route path="add" element={<MovableAntiquitiesAdd />} />
              <Route path="search" element={<MovableAntiquitiesSearch />} />
              <Route path=":id" element={<MovableDetail />} />
              <Route path=":id/edit" element={<MovableEdit />} />
            </Route>
            <Route path="controlled-areas">
              <Route index element={<ControlledAreas />} />
              <Route path="add" element={<ControlledAreasAdd />} />
              <Route path="search" element={<ControlledAreasSearch />} />
              <Route path=":id" element={<ControlledDetail />} />
              <Route path=":id/edit" element={<ControlledEdit />} />
            </Route>
            <Route path="areas-under-temp-requisition">
              <Route index element={<AreasUnderReq />} />
              <Route path="add" element={<AreasUnderReqAdd />} />
              <Route path="search" element={<AreasUnderReqSearch />} />
              <Route path=":id" element={<AreasDetail />} />
              <Route path=":id/edit" element={<AreasItemEdit />} />
            </Route>
            <Route path="surveyed-areas">
              <Route index element={<SurveyedAreas />} />
              <Route path="add" element={<SurveyedAreasAdd />} />
              <Route path="search" element={<SurveyedAreasSearch />} />
                <Route path=":id" element={<SurveyedDetail />} />
              <Route path=":id/edit" element={<SurveyedEdit />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
