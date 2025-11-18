import AppMenubar from "@/components/app-menubar";
import AppSidebar from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export const iframeHeight = "600px";

export default function MainLayout() {
  return (
    <div className="[--header-height:calc(--spacing(8))]">
      <SidebarProvider className="flex flex-col">
        <AppMenubar />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <main >
              <Outlet />
              <Toaster />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
