import {
  Landmark,
  Amphora,
  LandPlot,
  ChartArea,
  ShieldCheck,
  PlusCircle,
  Search,
} from "lucide-react";

export const entities = [
  {
    id: 1,
    title: "Ancient Monuments",
    url: "/ancient-monuments",
    icon: Landmark,
  },
  {
    id: 2,
    title: "Movable Antiquities",
    url: "/movable-antiquities",
    icon: Amphora,
  },
  {
    id: 3,
    title: "Controlled Areas",
    url: "/controlled-areas",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Areas Under Temporary Requisition",
    url: "/areas-under-temp-requisition",
    icon: LandPlot,
  },
  {
    id: 5,
    title: "Surveyed Areas",
    url: "/surveyed-areas",
    icon: ChartArea,
  },
];




export const actions = [
  {
    icon: PlusCircle,
    name: "Add",
    helper: "add",
    description: "Add new data to the system.",
  },
  // {
  //   icon: Pencil,
  //   name: "Edit",
  //   helper:"edit",
  //   description: "Edit existing data in the system.",
  // },
  {
    icon: Search,
    name: "Search",
    helper: "search",
    description: "Search through the data available in the system.",
  },
  // {
  //   icon: RefreshCw,
  //   name: "Sync Check",
  //   helper:"",
  //   description:
  //     "Sync spatial data with external sources and make inconsistent check.",
  // },
];
