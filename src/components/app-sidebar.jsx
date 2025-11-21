import { Link, useLocation } from "react-router-dom";
import { CircleUserRound, Home, X } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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

let linkActivated = "text-sidebar-accent hover:bg-sidebar-background-hover hover:text-sidebar-accent";
let linkNotActivated = "text-sidebar-foreground hover:bg-sidebar-background-hover hover:text-secondary";

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
            <SidebarMenuButton
              asChild
              className={location.pathname === "/" ? linkActivated : linkNotActivated}
            >
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
                    className={
                      location.pathname.includes(item.url)
                        ? linkActivated
                        : linkNotActivated
                    }
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className= {linkNotActivated}
              asChild
            >
              <div className="flex items-center gap-2">
                <CircleUserRound />
                <span>Nikos Zoros</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
