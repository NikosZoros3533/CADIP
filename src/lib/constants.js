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
    name: "building_material",
    displayName: "Building Materials",
    fetchUrl: "building_materials",
  },
  {
    name: "building_methods",
    displayName: "Building Methods",
    fetchUrl: "building_methods",
  },
  {
    name: "certainty",
    displayName: "Certainty",
    fetchUrl: "certainties",
  },
  {
    name: "current_use_ancient_monuments",
    displayName: "Current Use For Ancient Monuments",
    fetchUrl: "am_current_uses",
  },
  {
    name: "integrity",
    displayName: "Integrity",
    fetchUrl: "integrities",
  },
  {
    name: "legal_status",
    displayName: "Legal Status",
    fetchUrl: "legal_statuses",
  },
  {
    name: "legislation",
    displayName: "Legislation",
    fetchUrl: "legislations",
  },
  {
    name: "monument_categories",
    displayName: "Monument Category",
    fetchUrl: "monument_categories",
  },
  {
    name: "morphology",
    displayName: "Morphology",
    fetchUrl: "morphologies",
  },
  {
    name: "ornamentation",
    displayName: "Ornamentation",
    fetchUrl: "ornamentations",
  },
  {
    name: "ownership",
    displayName: "Ownership",
    fetchUrl: "ownerships",
  },
  {
    name: "present_state",
    displayName: "Present State",
    fetchUrl: "present_states",
  },
  {
    name: "protection",
    displayName: "Protection",
    fetchUrl: "protections",
  },
  {
    name: "protection_responsible_bodies",
    displayName: "Bodies Responsible for Protection",
    fetchUrl: "protection_responsible_bodies",
  },
  {
    name: "public_access",
    displayName: "Public Access",
    fetchUrl: "public_accesses",
  },
  {
    name: "schedule",
    displayName: "Schedule",
    fetchUrl: "schedules",
  },
  {
    name: "setting",
    displayName: "Setting",
    fetchUrl: "settings",
  },
  {
    name: "toponyms",
    displayName: "Toponym",
    fetchUrl: "toponyms",
  },
]);
