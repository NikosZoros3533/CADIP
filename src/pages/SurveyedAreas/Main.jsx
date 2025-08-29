import Card from "@/components/card";
import GridLayout from "../../components/grid-layout";
import { surveyedAreas } from "@/lib/objects";

export default function SurveyedAreas() {
  return (
    <GridLayout columns={4}>
      {surveyedAreas.map((area, idx) => (
        <Card key={idx} object={area} />
      ))}
    </GridLayout>
  );
}
