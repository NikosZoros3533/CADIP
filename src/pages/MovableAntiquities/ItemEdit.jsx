import { useParams } from "react-router-dom";


export default function () {
      const params = useParams();

  return (
    <div>Movable Antiquity Edit Item with {params.id}</div>
  )
}
