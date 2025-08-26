import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  return <div>Surveyed Area with id: {params.id}</div>;
}
