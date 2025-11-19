import { useParams } from "react-router-dom";
import { AMForm } from "@/components/ancientMonuments/form-component";

const object = {
  id: "1",
  name: "Castle of Limassol",
  description: "An ancient castle located in Limassol.",
  alternativeName: "",
  analyticalDescription: "",
  monumentNumber: "XX.12354",
  isRecordComplete: true,
  accessibilities: [],
  location: {
    district: "nicosia",
    town: "",
    quarter: "",
  },
  toponym: "ancient_city",
  plotsDeclExproee: "asdasdasd",
};

export default function () {
  // const params = useParams();
  // const object = { id: params.id };
  return <AMForm monument={object} />;
}
