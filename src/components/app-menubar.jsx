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
} from "lucide-react";

export default function AppMenubar() {
  return (
    <Menubar className="flex w-full justify-end fixed">
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
          <MenubarItem>Ancients Monuments</MenubarItem>
          <MenubarItem>Movable Antiquities</MenubarItem>
          <MenubarItem>Controlled Areas</MenubarItem>
          <MenubarItem>Areas Under Temporary Requisition</MenubarItem>
          <MenubarItem>Surveyed Areas</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Sync Spatial Data</MenubarItem>
          <MenubarItem>Inconsistent Spatial Data Check</MenubarItem>
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
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Documentation</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
