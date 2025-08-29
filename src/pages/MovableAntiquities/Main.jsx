import Card from "@/components/card";
import GridLayout from "../../components/grid-layout";
import { movableAntiquities } from "@/lib/objects";

export default function MovableAntiquities() {
  return (
    <GridLayout columns={4}>
      {movableAntiquities.map((antiquity, idx) => (
        <Card key={idx} object={antiquity} />
      ))}
    </GridLayout>
  );
}
