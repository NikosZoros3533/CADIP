import Card from "@/components/card";
import GridLayout from "../../components/grid-layout";
import { entities } from "@/lib/objects";




export default function AncientMonuments() {

  const ancientMonuments = entities[0];

  return (
    <GridLayout columns={4}>
      {ancientMonuments.data.map((card, idx) => (
        <Card key={idx} ancientMonument={card} />
      ))}
    </GridLayout>
  );
}
