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

export default function CollapsibleComponent({ entity }) {
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
                <TableHead>Declaration/Expropriation name</TableHead>
                <TableHead>District</TableHead>
                <TableHead>Town/Village/Quarter</TableHead>
                <TableHead>Recorded by</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entity.data.map((monument) => (
                <TableRow key={monument.id}>
                  <TableCell className="font-medium">{monument.id}</TableCell>
                  <TableCell>{monument.name}</TableCell>
                  <TableCell>{monument.district}</TableCell>
                  <TableCell>{monument.town}</TableCell>
                  <TableCell>{monument.recordedBy}</TableCell>
                  <TableCell className="text-right">
                    <div>
                      <Button
                        // onClick={() =>
                        //   handleShow(monument.id, "ancient-monuments")
                        // }
                        variant="secondary"
                        size="small"
                        className="mr-1 text-xs p-1 cursor-pointer"
                        aria-label={`Show details for ${monument.name}`}
                      >
                        Show
                      </Button>
                      <Button
                        // onClick={() =>
                        //   handleEdit(monument.id, "ancient-monuments")
                        // }
                        size="small"
                        variant="outline"
                        className="text-xs p-1 cursor-pointer"
                        aria-label={`Edit ${monument.name}`}
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
