import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Settings,
  UserCog,
  LogOut,
  CirclePlus,
  Sun,
  BookType,
  BookOpen,
  MapPin,
  RefreshCw,
  CloudCheck,
  File,
  BookText,
} from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { entities } from "@/lib/entities";

export default function AppMenubar() {
  return (
    <Menubar className="flex w-full justify-between fixed z-10 md:justify-end">
      <SidebarTrigger className="md:hidden"/>
      <div className="flex items-center">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Settings
              <Settings />
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              My profile
              <UserCog />
            </MenubarItem>
            <MenubarItem>
              Change Theme <Sun />
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Exit
              <LogOut />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Add
              <CirclePlus />
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Thesaurus of Terms
              <BookType />
            </MenubarItem>
            <MenubarItem>
              Bibliographic Sources <BookOpen />
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              GIS Map <MapPin />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Search</MenubarTrigger>
          <MenubarContent>
            {entities.map((entity) => (
              <MenubarItem key={entity.title} className="flex items-center">{entity.title}<entity.icon/></MenubarItem>)
            )}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Tools</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Sync Spatial Data
              <RefreshCw />
            </MenubarItem>
            <MenubarItem>
              Inconsistent Spatial Data Check
              <CloudCheck />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Window</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Toggle Sidebar <MenubarShortcut>Ctrl+b</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              About
              <BookText />
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Documentation
              <File />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
