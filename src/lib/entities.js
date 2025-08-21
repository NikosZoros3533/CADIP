import {
  Landmark,
  Amphora,
  LandPlot,
  ChartArea,
  ShieldCheck,
  PlusCircle,
  Pencil,
  Search,
  RefreshCw,
} from "lucide-react";

export const entities = [
  {
    title: "Ancient Monuments",
    url: "/ancient-monuments",
    editUrl: "/ancient-monuments/edit",
    icon: Landmark,
    description: "Search for ancient monuments in the system.",
  },
  {
    title: "Movable Antiquities",
    url: "/movable-antiquities",
    editUrl: "/movable-antiquities/edit",
    icon: Amphora,
    description: "Search for movable antiquities in the system.",
  },
  {
    title: "Controlled Areas",
    url: "/controlled-areas",
    editUrl: "/controlled-areas/edit",
    icon: ShieldCheck,
    description: "Search for controlled areas in the system.",
  },
  {
    title: "Areas Under Temporary Requisition",
    url: "/areas-under-temp-requisition",
    editUrl: "/areas-under-temp-requisition/edit",
    icon: LandPlot,
    description: "Search for areas under temporary requisition in the system.",
  },
  {
    title: "Surveyed Areas",
    url: "/surveyed-areas",
    editUrl: "/surveyed-areas/edit",
    icon: ChartArea,
    description: "Search for surveyed areas in the system.",
  },
];

export const actions = [
  {
    icon: PlusCircle,
    name: "Add",
    description: "Add new data to the system.",
  },
  {
    icon: Pencil,
    name: "Edit",
    description: "Edit existing data in the system.",
  },
  {
    icon: Search,
    name: "Search",
    description: "Browse through the data available in the system.",
  },
  {
    icon: RefreshCw,
    name: "Sync Check",
    description:
      "Sync spatial data with external sources and make inconsistent check.",
  },
];
