import AppSidebar from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function MainLayout() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main>
            <Outlet />
            <Toaster />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
