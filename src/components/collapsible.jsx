import { ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ScrollArea } from "./ui/scroll-area";
import { useNavigate } from "react-router-dom";
import TableComponent from "./table-component";
import { useEffect, useState } from "react";
import { getMonuments } from "@/services/api";

export default function CollapsibleComponent({ entity }) {
  const [objects, setObjects] = useState({});
  useEffect(() => {
    //Gia na min travaei ta alla apis pou den exw
    if (entity.id !== 1) {
      return;
    }
    const fetchEntities = async () => {
      const data = await getMonuments();
      setObjects(data);
    };

    fetchEntities();
  }, []);

  return (
    <Collapsible className="bg-card flex flex-col gap-2 border p-1 rounded-lg w-full">
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">{entity.title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="px-6 pb-4">
        <ScrollArea className="h-72">
          <TableComponent objects={objects} />
        </ScrollArea>
      </CollapsibleContent>
    </Collapsible>
  );
}
