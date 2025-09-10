import { Button } from "@/components/ui/button";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { PlusCircle, Search, CircleArrowRight, Grid2x2, List } from "lucide-react";
import { useState } from "react";

export default function PagesLayout() {
  const location = useLocation();
  function getParentRoute() {
    const segments = location.pathname.replace(/^\/+/, "").split("/");
    return segments.length > 0 ? `/${segments[0]}` : "/";
  }
  const parentRoute = getParentRoute();
  const [isGrid, setIsGrid] = useState(true);

  return (
    <>
      <div className="flex flex-wrap justify-between gap-2 p-2 md:p-3 text-base md:text-lg w-full md:w-1/2 lg:w-1/3 justify-self-center rounded-2xl mt-6 bg-card border">
        <Button variant="ghost" asChild>
          <NavLink to={`${parentRoute}`} end>
            <span className="hidden md:inline">Browse</span>
            <CircleArrowRight className="md:ml-2" />
          </NavLink>
        </Button>
        <Button variant="ghost" asChild>
          <NavLink to={`${parentRoute}/search`}>
            <span className="hidden md:inline">Search</span>
            <Search className="md:ml-2" />
          </NavLink>
        </Button>
        <Button variant="ghost" asChild>
          <NavLink to={`${parentRoute}/add`}>
            <span className="hidden md:inline">Add</span>
            <PlusCircle className="md:ml-2" />
          </NavLink>
        </Button>
      </div>
      <div className="flex flex-wrap justify-end gap-2 p-4 mx-auto max-w-7xl">
        <Button
          size="icon"
          variant={isGrid ? "outline" : "ghost"}
          onClick={() => setIsGrid(true)}
        >
          <Grid2x2 />
        </Button>
        <Button
          size="icon"
          variant={isGrid ? "ghost" : "outline"}
          onClick={() => setIsGrid(false)}
        >
          <List />
        </Button>
      </div>
      <Outlet context={{isGrid}}/>
    </>
  );
}
