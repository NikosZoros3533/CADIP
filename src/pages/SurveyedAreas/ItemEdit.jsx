import { useParams } from "react-router-dom";


export default function () {
      const params = useParams();

  return (
    <div>Surveyed Area Item with {params.id}</div>
  )
}
