import {
  Landmark,
  Amphora,
  LandPlot,
  ChartArea,
  ShieldCheck,
  PlusCircle,
  Search,
} from "lucide-react";

export const entities = Object.freeze([
  {
    id: 1,
    title: "Ancient Monuments",
    url: "/ancient-monuments",
    fetchUrl: "ancient_monuments",
    icon: Landmark,
  },
  {
    id: 2,
    title: "Movable Antiquities",
    url: "/movable-antiquities",
    fetchUrl: "movable_antiquities",
    icon: Amphora,
  },
  {
    id: 3,
    title: "Controlled Areas",
    url: "/controlled-areas",
    fetchUrl: "controlled_areas",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Areas Under Temporary Requisition",
    url: "/areas-under-temp-requisition",
    fetchUrl: "autr",
    icon: LandPlot,
  },
  {
    id: 5,
    title: "Surveyed Areas",
    url: "/surveyed-areas",
    fetchUrl: "surveyed_areas",
    icon: ChartArea,
  },
]);

export const actions = Object.freeze([
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
]);

export const vocabs = Object.freeze([
  {
    name: "accessibility",
    displayName: "Accessibility",
    fetchUrl: "accessibilities",
  },
  {
    name: "bibliographic_sources",
    displayName: "Bibliographic Sources",
    fetchUrl: "bibliographic_sources",
  },
  {
    name: "",
    displayName: "Building Materials",
    fetchUrl: "building_materials",
  },
  {
    name: "",
    displayName: "Building Methods",
    fetchUrl: "building_methods",
  },
  {
    name: "",
    displayName: "Certainty",
    fetchUrl: "certainties",
  },
  {
    name: "",
    displayName: "Current Use For Ancient Monuments",
    fetchUrl: "am_current_uses",
  },
  {
    name: "",
    displayName: "Integrity",
    fetchUrl: "integrities",
  },
  {
    name: "",
    displayName: "Legal Status",
    fetchUrl: "legal_statuses",
  },
  {
    name: "",
    displayName: "Legislation",
    fetchUrl: "legislations",
  },
  {
    name: "",
    displayName: "Monument Category",
    fetchUrl: "monument_categories",
  },
  {
    name: "",
    displayName: "Morphology",
    fetchUrl: "morphologies",
  },
  {
    name: "",
    displayName: "Ornamentation",
    fetchUrl: "ornamentations",
  },
  {
    name: "",
    displayName: "Ownership",
    fetchUrl: "ownerships",
  },
  {
    name: "",
    displayName: "Present State",
    fetchUrl: "present_states",
  },
  {
    name: "",
    displayName: "Protection",
    fetchUrl: "protections",
  },
  {
    name: "",
    displayName: "Bodies Responsible for Protection",
    fetchUrl: "protection_responsible_bodies",
  },
  {
    name: "",
    displayName: "Public Access",
    fetchUrl: "public_accesses",
  },
  {
    name: "",
    displayName: "Schedule",
    fetchUrl: "schedules",
  },
  {
    name: "",
    displayName: "Setting",
    fetchUrl: "settings",
  },
  {
    name: "",
    displayName: "Toponym",
    fetchUrl: "toponyms",
  },
]);
