import GridLayout from "../../components/grid-layout";
import { movableAntiquities } from "@/lib/objects";
import CardComponent from "@/components/card-component";

export default function MovableAntiquities() {
  return (
    <GridLayout columns={4}>
      {movableAntiquities.map((antiquity, idx) => (
        <CardComponent key={idx} object={antiquity} />
      ))}
    </GridLayout>
  );
}
