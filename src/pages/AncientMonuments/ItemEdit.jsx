import { useParams } from "react-router-dom";
import { AMForm } from "@/components/ancientMonuments/form-component";

const object = {
  id: "1",
  name: "Castle of Limassol",
  description: "An ancient castle located in Limassol.",
  alternativeName: "alternate castle name",
  analyticalDescription: "Analytical description of the castle.",
  monumentNumber: "XX.12354",
  isRecordComplete: true,
  accessibilities: ["1", "2"],
  location: {
    district: "nicosia",
    town: "nicosia",
    quarter: "new_town",
  },
  toponym: "ancient_city",
  plotsDeclExpro: "Plot details here.",
};

export default function () {
  // const params = useParams();
  // const object = { id: params.id };
  return <AMForm monument={object} />;
}
