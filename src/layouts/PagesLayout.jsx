import { Button } from "@/components/ui/button";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  PlusCircle,
  Search,
  CircleArrowRight,
  Grid2x2,
  List,
} from "lucide-react";
import { useState } from "react";
import { getChildRoute, getParentRoute } from "@/lib/utils";
import AppBreadcrumb from "@/components/app-breadcrumb";

export default function PagesLayout() {
  const location = useLocation();
  const parentRoute = getParentRoute(location);
  const childRoute = getChildRoute(location);
  const [isGrid, setIsGrid] = useState(true);

  return (
    <>
      <div className="w-full px-2">
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
          <Button asChild>
            <NavLink to={`${parentRoute}/add`}>
              <span className="hidden md:inline">New</span>
              <PlusCircle className="md:ml-2" />
            </NavLink>
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-between items-center gap-2 p-6 mx-auto md:max-w-7xl">
        <AppBreadcrumb />
        {!childRoute && (
          <div className="flex gap-0.5">
            <Button
              size="icon"
              variant={isGrid ? "" : "ghost"}
              onClick={() => setIsGrid(true)}
            >
              <Grid2x2 />
            </Button>
            <Button
              size="icon"
              variant={isGrid ? "ghost" : ""}
              onClick={() => setIsGrid(false)}
            >
              <List />
            </Button>
          </div>
        )}
      </div>
      <div className="@container px-2 md:px-6 lg:px-12 mx-auto">
        <Outlet context={{ isGrid }} />
      </div>
    </>
  );
}
