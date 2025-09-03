import GridLayout from "../../components/grid-layout";
import { surveyedAreas } from "@/lib/objects";
import CardComponent from "@/components/card-component";

export default function SurveyedAreas() {
  return (
    <GridLayout columns={4}>
      {surveyedAreas.map((area, idx) => (
        <CardComponent key={idx} object={area} />
      ))}
    </GridLayout>
  );
}
