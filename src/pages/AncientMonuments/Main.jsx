import Card from "@/components/card";
import GridLayout from "../../components/grid-layout";
import {
  ancientMonuments,
} from "@/lib/objects";

export default function AncientMonuments() {

  return (
    <GridLayout columns={4}>
      {ancientMonuments.map((monument, idx) => (
        <Card key={idx} object={monument} />
      ))}
    </GridLayout>
  );
}
