import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableComponent({ objects }) {
  return (
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
        <TableBody >
          {objects.map((object) => (
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
                    size="xs"
                    className="text-xs p-1"
                  >
                    Show
                  </Button>
                  <Button
                    onClick={() => handleEdit(object.id, entity.url)}
                    size="xs"
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
  );
}
