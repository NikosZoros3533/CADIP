import { Button } from "@/components/ui/button";
import { Link, Outlet, useLocation} from "react-router-dom";

export default function PagesLayout() {
    const location= useLocation();
    function getParentRoute() {
        const segments = location.pathname.replace(/^\/+/, "").split("/");
        return segments.length > 0 ? `/${segments[0]}` : "/";
    }
    const parentRoute = getParentRoute();
  return (
    <>
      <div className="flex flex-wrap justify-between p-3 text-lg w-1/3 justify-self-center bg-muted rounded-2xl mt-1">
          <Button variant="link"><Link to={`${parentRoute}`}>Browse</Link></Button>
          <Button variant="link"><Link to={`${parentRoute}/search`}>Search</Link></Button>
          <Button variant="link"><Link to={`${parentRoute}/add`}>Add</Link></Button>
          <Button variant="link"><Link to={`${parentRoute}/edit`}>Edit</Link></Button>
      </div>
      <Outlet />
    </>
  );
}
