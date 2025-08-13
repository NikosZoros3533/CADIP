// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/root1",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/root2",
    icon: Inbox,
  },

];
export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CADIP</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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

// export default function AppSidebar() {
//   return (
//     <div className="h-screen w-64 flex flex-col p-4 border-r border-accent ">
//       <h1 className="text-2xl font-bold mb-6">My App</h1>
//       <nav className="flex flex-col gap-2">
//         <Button variant="secondary" asChild>
//           <Link to="/root1">Root 1</Link>
//         </Button>
//         <Button variant="secondary" asChild>
//           <Link to="/root2">Root 2</Link>
//         </Button>
//       </nav>
//     </div>
//   );
// }
