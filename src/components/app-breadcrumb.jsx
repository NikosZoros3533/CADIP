import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { actions, entities } from "@/lib/constants";
import { getChildRoute, getParentRoute } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export default function AppBreadcrumb() {
  const location = useLocation();
  const parentRoute = getParentRoute(location);
  const childRoute = getChildRoute(location);
  const entityToShow = entities.find((entity) => entity.url === parentRoute);
  const actionToShow = actions.find((action) => action.helper === childRoute);
  let itemUrl = null;
  if (childRoute && !actionToShow) {
    itemUrl = childRoute;
  }
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {!childRoute && entityToShow && (
          <BreadcrumbItem>
            <BreadcrumbPage>{entityToShow.title}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
        {childRoute && actionToShow && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={entityToShow.url}>{entityToShow.title}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <actionToShow.icon className="w-4 h-4" />
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
        {childRoute && itemUrl && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={entityToShow.url}>{entityToShow.title}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {itemUrl}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
