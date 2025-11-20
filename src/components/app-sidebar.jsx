import { Link, useLocation } from "react-router-dom";
import { Home, X } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import { entities as items } from "../lib/constants";

export default function AppSidebar() {
  const { isMobile, toggleSidebar } = useSidebar();

  const location = useLocation();
  return (
    <Sidebar
      collapsible="icon"
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center my-2 justify-between border-b pb-4">
            <SidebarMenuButton asChild  className={location.pathname === "/" ? "text-sidebar-accent" : ""}>
              <Link to="/">
                <Home />
                <span className="font-bold text-base">CADIP</span>
              </Link>
            </SidebarMenuButton>
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-2">
                  <SidebarMenuButton
                    asChild
                    // isActive={location.pathname.includes(item.url)}
                    className={location.pathname.includes(item.url) ? "text-sidebar-accent" : ""}
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
    </Sidebar>
  );
}
