import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  return <div>Movable Antiquity with id: {params.id}</div>;
}
