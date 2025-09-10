import GridLayout from "../../components/grid-layout";
import { ancientMonuments } from "@/lib/objects";
import { useOutletContext } from "react-router-dom";
import CardComponent from "@/components/card-component";
import TableComponent from "@/components/table-component";

export default function AncientMonuments() {
  const { isGrid } = useOutletContext();

  return (
    <>
      {isGrid ? (
        <GridLayout columns={4}>
          {ancientMonuments.map((monument, idx) => (
            <CardComponent key={idx} object={monument} />
          ))}
        </GridLayout>
      ) : (
        <div className="px-4 py-6">
          <div className="overflow-x-auto w-full p-10 border-2 rounded-2xl">
            <TableComponent objects={ancientMonuments}/>
          </div>
        </div>
      )}
    </>
  );
}
