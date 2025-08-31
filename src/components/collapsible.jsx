import { ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ScrollArea } from "./ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useNavigate } from "react-router-dom";
import {
  ancientMonuments,
  areasUnderTempReq,
  controlledAreas,
  movableAntiquities,
  surveyedAreas,
} from "@/lib/objects";

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
      <CollapsibleContent className="px-6 pb-4 ">
        <ScrollArea className="h-72">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>District</TableHead>
                <TableHead>Town/Village/Quarter</TableHead>
                <TableHead>Recorded by</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {objects.map((object) => (
                <TableRow key={object.id}>
                  <TableCell className="font-medium">{object.id}</TableCell>
                  <TableCell>{object.name}</TableCell>
                  <TableCell>{object.district}</TableCell>
                  <TableCell>{object.town}</TableCell>
                  <TableCell>{object.recordedBy}</TableCell>
                  <TableCell className="text-right">
                    <div>
                      <Button
                        onClick={() => handleShow(object.id, entity.url)}
                        variant="secondary"
                        size="sm"
                        className="mr-1 text-xs p-1 cursor-pointer"
                        aria-label={`Show details for ${object.name}`}
                      >
                        Show
                      </Button>
                      <Button
                        onClick={() => handleEdit(object.id, entity.url)}
                        size="sm"
                        variant="outline"
                        className="text-xs p-1 cursor-pointer"
                        aria-label={`Edit ${object.name}`}
                      >
                        Edit
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CollapsibleContent>
    </Collapsible>
  );
}
