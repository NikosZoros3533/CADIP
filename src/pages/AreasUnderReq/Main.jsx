import GridLayout from "../../components/grid-layout";
import { areasUnderTempReq } from "@/lib/objects";
import CardComponent from "@/components/card-component";

export default function AreasUnderReq() {
  return (
    <GridLayout columns={4}>
      {areasUnderTempReq.map((area, idx) => (
        <CardComponent key={idx} object={area} />
      ))}
    </GridLayout>
  );
}
