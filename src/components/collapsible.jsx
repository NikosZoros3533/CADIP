import { ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ScrollArea } from "./ui/scroll-area";
import { useNavigate } from "react-router-dom";
import {
  ancientMonuments,
  areasUnderTempReq,
  controlledAreas,
  movableAntiquities,
  surveyedAreas,
} from "@/lib/objects";
import TableComponent from "./table-component";

export default function CollapsibleComponent({ entity }) {
  const navigate = useNavigate();
  const handleShow = (id, url) => navigate(`${url}/${id}`);
  const handleEdit = (id, url) => navigate(`${url}/${id}/edit`);

  function getObjects() {
    if (entity.id === 1) {
      return ancientMonuments;
    } else if (entity.id === 2) {
      return movableAntiquities;
    } else if (entity.id === 3) {
      return controlledAreas;
    } else if (entity.id === 4) {
      return areasUnderTempReq;
    } else if (entity.id === 5) {
      return surveyedAreas;
    }
  }

  const objects = getObjects();
  return (
    <Collapsible className="bg-card flex flex-col gap-2 border p-1 rounded-lg">
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
