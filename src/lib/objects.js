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
    addUrl: "/ancient-monuments/add",
    searchUrl: "/ancient-monuments/search",
    editUrl: "/ancient-monuments/edit",
    icon: Landmark,
    description: "Search for ancient monuments in the system.",
  },
  {
    title: "Movable Antiquities",
    url: "/movable-antiquities",
    addUrl: "/movable-antiquities/add",
    searchUrl: "/movable-antiquities/search",
    editUrl: "/movable-antiquities/edit",
    icon: Amphora,
    description: "Search for movable antiquities in the system.",
  },
  {
    title: "Controlled Areas",
    url: "/controlled-areas",
    addUrl: "/controlled-areas/add",
    searchUrl: "/controlled-areas/search",
    editUrl: "/controlled-areas/edit",
    icon: ShieldCheck,
    description: "Search for controlled areas in the system.",
  },
  {
    title: "Areas Under Temporary Requisition",
    url: "/areas-under-temp-requisition",
    addUrl: "/areas-under-temp-requisition/add",
    searchUrl: "/areas-under-temp-requisition/search",
    editUrl: "/areas-under-temp-requisition/edit",
    icon: LandPlot,
    description: "Search for areas under temporary requisition in the system.",
  },
  {
    title: "Surveyed Areas",
    url: "/surveyed-areas",
    addUrl: "/surveyed-areas/add",
    searchUrl: "/surveyed-areas/search",
    editUrl: "/surveyed-areas/edit",
    icon: ChartArea,
    description: "Search for surveyed areas in the system.",
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

export const ancientMonuments = [
  {
    id: 1,
    name: "The castle of Limassol",
    district: "Lemesos",
    town: "LEMESOS",
    recordedBy: "M.Kouali",
  },
  {
    id: 2,
    name: "The castle of Pafos",
    district: "Pafos",
    town: "PAFOS",
    recordedBy: "N.Zoros",
  },
  {
    id: 3,
    name: "The castle of Larnaca",
    district: "Larnaka",
    town: "LARNAKA",
    recordedBy: "A.Antonio",
  },
  {
    id: 4,
    name: "The castle of Ammochostos",
    district: "Ammochostos",
    town: "AMMOCHOSTOS",
    recordedBy: "M.Kouali",
  },
  {
    id: 5,
    name: "The castle of Keryneia",
    district: "Keryneia",
    town: "KERYNEIA",
    recordedBy: "N.Zoros",
  },
  {
    id: 6,
    name: "The castle of Lefkosia",
    district: "Lefkosia",
    town: "LEFKOSIA",
    recordedBy: "A.Antonio",
  },
];


export const movableAntiquities = [
  {
    id: 1,
    name: "Ancient Vase",
    district:"Keryneia",
    town:"AGIOS ERMOLAOS",
    recordedBy: "N.Mikrakis",
  },
  {
    id: 2,
    name: "Ancient Coin",
    district:"Lemesos",
    town:"LEFKOSIA",
    recordedBy: "A.Antonio",
  },
  {
    id: 3,
    name: "Ancient Statue",
    district:"Pafos",
    town:"PAFOS",
    recordedBy: "M.Kouali",
  },
  {
    id: 4,
    name: "Ancient Jewelry",
    district:"Larnaka",
    town:"LARNAKA",
    recordedBy: "N.Zoros",
  },
  {
    id: 5,
    name: "Ancient Tool",
    district:"Ammochostos",
    town:"AMMOCHOSTOS",
    recordedBy: "A.Antonio",
  },
  {
    id: 6,
    name: "Ancient Weapon",
    district:"Pafos",
    town:"MESANA",
    recordedBy: "N.Mikrakis",
  }

]