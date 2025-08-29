import Card from "@/components/card";
import GridLayout from "../../components/grid-layout";
import { areasUnderTempReq } from "@/lib/objects";

export default function AreasUnderReq() {
  return (
    <GridLayout columns={4}>
      {areasUnderTempReq.map((area, idx) => (
        <Card key={idx} object={area} />
      ))}
    </GridLayout>
  );
}
