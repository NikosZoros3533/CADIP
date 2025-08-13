import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import Root1 from "@/pages/Root1";
import Root2 from "@/pages/Root2";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="root1" element={<Root1 />} />
          <Route path="root2" element={<Root2 />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
