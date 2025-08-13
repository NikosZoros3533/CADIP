import AppSidebar from "@/components/app-sidebar";
import Sidebar from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar/>
    <div className="flex">
      <main className="flex-1 p-6 ">
        <SidebarTrigger />
        <Outlet /> {/* This renders the current page */}
      </main>
    </div>
    </SidebarProvider>
  );
}
