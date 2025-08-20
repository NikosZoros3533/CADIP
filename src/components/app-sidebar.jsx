import { Link, useLocation } from "react-router-dom";

import {
  Landmark,
  Amphora,
  LandPlot,
  ChartArea,
  ShieldCheck,
  X,
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
import { Button } from "./ui/button";

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
  const { isMobile, toggleSidebar } = useSidebar();

  const location = useLocation();

  return (
    <Sidebar collapsible={isMobile}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-base mb-6 py-6 border-b rounded-none flex items-center justify-between">
            <Link to="/" className={location.pathname === "/" ? "font-bold text-primary" : ""} >CADIP</Link>
            {isMobile && (
              <Button
                variant="primary"
                size="icon"
                className="size-6 hover:bg-secondary"
                onClick={toggleSidebar}
              >
                <X />
              </Button>
            )}
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
}
