
import GridLayout from "../../components/grid-layout";
import { controlledAreas } from "@/lib/objects";
import CardComponent from "@/components/card-component";

export default function ControlledAreas() {
  return (
    <GridLayout columns={4}>
      {controlledAreas.map((area, idx) => (
        <CardComponent key={idx} object={area} />
      ))}
    </GridLayout>
  );
}
