import { Link, useLocation } from "react-router-dom";

import {
  Landmark,
  Amphora,
  LandPlot,
  ChartArea,
  ShieldCheck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import ThemeSwitch from "./theme-switcher";
import { SidebarTrigger } from "@/components/ui/sidebar";

const items = [
  {
    title: "Ancient Monuments",
    url: "/ancient-monuments",
    icon: Landmark,
  },
  {
    title: "Movable Antiquities",
    url: "/movable-antiquities",
    icon: Amphora,
  },
  {
    title: "Controlled Areas",
    url: "/controlled-areas",
    icon: ShieldCheck,
  },
  {
    title: "Areas Under Temporary Requisition",
    url: "/areas-under-temp-requisition",
    icon: LandPlot,
  },
  {
    title: "Surveyed Areas",
    url: "/surveyed-areas",
    icon: ChartArea,
  },
];
export default function AppSidebar() {
  const {
    state,
    openMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  if (isMobile) {
    console.log("Mobile Sidebar Open State:", openMobile);
    console.log("Mobile Sidebar State:", state);
  }

  const location = useLocation();

  const sidebar = (
    <Sidebar collapsible={isMobile}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-base mb-6 py-6 border-b rounded-none flex items-center">
            <Link to="/">CADIP</Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-2">
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    onClick={() => {
                      if (isMobile) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem className="w-full flex justify-between items-center">
            <p>Nikos Zoros</p>
            <ThemeSwitch />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
  return isMobile ? (
    <>
      {<SidebarTrigger className="fixed top-1 left-2 z-50" />}
      {sidebar}
    </>
  ) : (
    sidebar
  );
}
