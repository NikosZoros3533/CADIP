import { useParams } from "react-router-dom";
import AMForm from "@/components/ancientMonuments/archived-form-component";

export default function () {
  const params = useParams();
  const object = { id: params.id };
  return <AMForm monument={object} />;
}
