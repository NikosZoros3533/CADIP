import { Button } from "@/components/ui/button";
import { Link, Outlet, useLocation } from "react-router-dom";
import { PlusCircle, Pencil, Search, CircleArrowRight } from "lucide-react";

export default function PagesLayout() {
  const location = useLocation();
  function getParentRoute() {
    const segments = location.pathname.replace(/^\/+/, "").split("/");
    return segments.length > 0 ? `/${segments[0]}` : "/";
  }
  const parentRoute = getParentRoute();

  return (
    <>
      <div className="flex flex-row  flex-wrap justify-between gap-2 p-2 md:p-3 text-base md:text-lg w-full md:w-1/2 lg:w-1/3 justify-self-center bg-muted rounded-2xl mt-1">
        <Button variant="ghost" asChild>
          <Link to={`${parentRoute}`}>
            <span className="hidden md:inline">Browse</span>
            <CircleArrowRight className="md:ml-2" />
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to={`${parentRoute}/search`}>
            <span className="hidden md:inline">Search</span>
            <Search className="md:ml-2" />
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to={`${parentRoute}/add`}>
            <span className="hidden md:inline">Add</span>
            <PlusCircle className="md:ml-2" />
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to={`${parentRoute}/edit`}>
            <span className="hidden md:inline">Edit</span>
            <Pencil className="md:ml-2" />
          </Link>
        </Button>
      </div>
      <Outlet />
    </>
  );
}
