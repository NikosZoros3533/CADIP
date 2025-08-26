import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  return <div>Areas Under Temp Req with id: {params.id}</div>;
}
