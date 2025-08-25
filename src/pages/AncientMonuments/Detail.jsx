import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  return <div>Ancient Monument with id: {params.id}</div>;
}
