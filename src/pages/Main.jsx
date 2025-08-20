import React from "react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "Add",
    description: "Add new data to the system.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Update",
    description: "Update existing data in the system.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Browse",
    description: "Browse through the data available in the system.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Sync",
    description: "Sync spatial data with external sources and make inconsistent check.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },

];

export default function Main() {
  return (
    <div className="flex justify-center min-h-auto">
    <BentoGrid className="lg:grid-rows-3 mt-12 max-w-4xl mx-4">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid></div>
  );
}
