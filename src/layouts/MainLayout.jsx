import AppMenubar from "@/components/app-menubar";
import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function MainLayout() {
  return (
    <div className="[--header-height:2rem]">
      <SidebarProvider>
        <AppMenubar />
        <AppSidebar />
        <main className="mt-[var(--header-height)] w-full">
          <Outlet />
          <Toaster/>
        </main>
      </SidebarProvider>
    </div>
  );
}
