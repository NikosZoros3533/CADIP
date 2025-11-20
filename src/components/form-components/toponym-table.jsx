import { useFieldContext } from "@/hooks/forms/form-context";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { SingleCheckbox } from "./vocabs/SingleCheckbox";

const toponyms = [
  { id: "1", value: "ancient_city", label: "Ancient City" },
  { id: "2", value: "historical_village", label: "Historical Village" },
  { id: "3", value: "sacred_site", label: "Sacred Site" },
];
export default function ToponymTable({ disabled }) {
  const field = useFieldContext();
  function handleChange(value) {
    field.setValue(value);
  }
  return (
    <div className="rounded-xl border-2 shadow-2xl p-4 overflow-auto max-w-full">
      <Table className={disabled ? "opacity-80 pointer-events-none" : ""}>
        <TableHeader>
          <TableRow>
            <TableHead>Toponym</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <SingleCheckbox
                title="Toponym"
                vocab={toponyms}
                value={field.state.value}
                onChange={handleChange}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
