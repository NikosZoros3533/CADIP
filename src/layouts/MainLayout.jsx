import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 ">
        <Outlet /> {/* This renders the current page */}
      </main>
    </div>
  );
}
