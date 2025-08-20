import React from "react";
import { PlusCircle,Pencil,Search,RefreshCw } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    Icon: PlusCircle,
    name: "Add",
    description: "Add new data to the system.",
  },
  {
    Icon: Pencil,
    name: "Edit",
    description: "Edit existing data in the system.",
  },
  {
    Icon: Search,
    name: "Browse",
    description: "Browse through the data available in the system.",
  },
  {
    Icon: RefreshCw,
    name: "Sync",
    description:
      "Sync spatial data with external sources and make inconsistent check.",
  },
];

export default function Main() {
  return (
    <div className="flex h-full items-start justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mt-20 mx-4 ">
      
       {features.map((feature) => (
          <Card key={feature.name} className="w-full max-w-sm h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle >
                {feature.name}
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button
                variant="outline" asChild><feature.Icon className="w-12 h-12 text-primary cursor-pointer"/></Button>
            </CardFooter>
          
        </Card>
       ))}
      </div>
    </div>
  );
}


//className="flex flex-wrap justify-center gap-4 p-4 w-full mt-40 border"