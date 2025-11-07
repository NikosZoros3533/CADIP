import GridLayout from "../../components/grid-layout";
import { areasUnderTempReq } from "@/lib/objects";
import CardComponent from "@/components/card-component";
import { useOutletContext } from "react-router-dom";
import TableComponent from "@/components/table-component";

export default function AreasUnderReq() {
  const { isGrid } = useOutletContext();
  return (
    <>
      {isGrid ? (
        <GridLayout columns={4}>
          {areasUnderTempReq.map((area, idx) => (
            <CardComponent key={idx} object={area} />
          ))}
        </GridLayout>
      ) : (
        <div className="px-4 py-6">
          <div className="overflow-x-auto w-full p-10 border-2 rounded-2xl">
            <TableComponent objects={areasUnderTempReq} />
          </div>
        </div>
      )}
    </>
  );
}
