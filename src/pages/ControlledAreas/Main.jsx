import Card from "@/components/card";
import GridLayout from "../../components/grid-layout";
import { controlledAreas } from "@/lib/objects";

export default function ControlledAreas() {
  return (
    <GridLayout columns={4}>
      {controlledAreas.map((area, idx) => (
        <Card key={idx} object={area} />
      ))}
    </GridLayout>
  );
}
