import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { SingleCheckbox } from "../vocabs/SingleCheckbox";

const districts = [
  { id: "1", value: "nicosia", label: "Nicosia" },
  { id: "2", value: "larnaca", label: "Larnaca" },
  { id: "3", value: "limassol", label: "Limassol" },
  { id: "4", value: "paphos", label: "Paphos" },
  { id: "5", value: "famagusta", label: "Famagusta" },
  { id: "6", value: "kyrenia", label: "Kyrenia" },
];
const towns = [
  { id: "1", value: "nicosia", label: "Nicosia" },
  { id: "2", value: "larnaca", label: "Larnaca" },
  { id: "3", value: "limassol", label: "Limassol" },
  { id: "4", value: "paphos", label: "Paphos" },
  { id: "5", value: "famagusta", label: "Famagusta" },
  { id: "6", value: "kyrenia", label: "Kyrenia" },
];

const quarters = [
  { id: "1", value: "old_town", label: "Old Town" },
  { id: "2", value: "new_town", label: "New Town" },
  { id: "3", value: "harbor_area", label: "Harbor Area" },
];

export default function LocationTable() {
  return (
    <div className="rounded-xl border-2 shadow-2xl p-4 overflow-auto max-w-full md:min-w-[700px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>District</TableHead>
            <TableHead>Town/Village</TableHead>
            <TableHead>Quarter</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="min-w-[500px]">
            <TableCell className="font-medium">
              <SingleCheckbox title="District" vocab={districts} />
            </TableCell>
            <TableCell>
              <SingleCheckbox title="Town/Village" vocab={towns} />
            </TableCell>
            <TableCell>
              <SingleCheckbox title="Quarter" vocab={quarters} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
