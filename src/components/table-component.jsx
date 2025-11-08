import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye,Pencil  } from "lucide-react";

export default function TableComponent({ objects }) {
  return (
      // <Table className="min-w-[600px]">
      //   <TableHeader>
      //     <TableRow>
      //       <TableHead className="w-[100px]">ID</TableHead>
      //       <TableHead>Name</TableHead>
      //       <TableHead>District</TableHead>
      //       <TableHead>Town/Village/Quarter</TableHead>
      //       <TableHead>Recorded by</TableHead>
      //       <TableHead className="text-right">Action</TableHead>
      //     </TableRow>
      //   </TableHeader>
      //   <TableBody >
      //     {objects.map((object) => (
      //       <TableRow key={object.id}>
      //         <TableCell className="font-medium">{object.id}</TableCell>
      //         <TableCell>{object.name}</TableCell>
      //         <TableCell>{object.district}</TableCell>
      //         <TableCell>{object.town}</TableCell>
      //         <TableCell>{object.recordedBy}</TableCell>
      //         <TableCell className="text-right">
      //           <div className="flex gap-1 justify-end">
      //             <Button
      //               onClick={() => handleShow(object.id, entity.url)}
      //               variant="ghost"
      //               size="icon"
                    
      //             >
      //               <Eye/>
      //             </Button>
      //             <Button
      //               onClick={() => handleEdit(object.id, entity.url)}
      //               size="icon"
      //               variant="ghost"
                    
      //             >
      //               <Pencil/>
      //             </Button>
      //           </div>
      //         </TableCell>
      //       </TableRow>
      //     ))}
      //   </TableBody>
      // </Table>
      <h1>Hello From tables</h1>
  );
}
