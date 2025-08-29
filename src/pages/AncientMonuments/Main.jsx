import Card from "@/components/card";
import GridLayout from "../../components/grid-layout";
import { ancientMonuments } from "@/lib/objects";
import { Grid2x2, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AncientMonuments() {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <>
      <div className="flex flex-wrap justify-end gap-2 p-2 lg:mr-45">
        <Button
          size="icon"
          variant={isGrid ? "outline" : "ghost"}
          onClick={() => setIsGrid(true)}
        >
          <Grid2x2 />
        </Button>
        <Button
          size="icon"
          variant={isGrid ? "ghost" : "outline"}
          onClick={() => setIsGrid(false)}
        >
          <List />
        </Button>
      </div>
      {isGrid ? (
        <GridLayout columns={4}>
          {ancientMonuments.map((monument, idx) => (
            <Card key={idx} object={monument} />
          ))}
        </GridLayout>
      ) : (
        <div className="px-4 py-6">
          <div className="overflow-x-auto w-full">
            <Table className="min-w-[600px]">
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
                {ancientMonuments.map((object) => (
                  <TableRow key={object.id}>
                    <TableCell className="font-medium">{object.id}</TableCell>
                    <TableCell>{object.name}</TableCell>
                    <TableCell>{object.district}</TableCell>
                    <TableCell>{object.town}</TableCell>
                    <TableCell>{object.recordedBy}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-1 justify-end">
                        <Button
                          onClick={() => handleShow(object.id, entity.url)}
                          variant="secondary"
                          size="sm"
                          className="text-xs p-1"
                        >
                          Show
                        </Button>
                        <Button
                          onClick={() => handleEdit(object.id, entity.url)}
                          size="sm"
                          variant="outline"
                          className="text-xs p-1"
                        >
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
}
