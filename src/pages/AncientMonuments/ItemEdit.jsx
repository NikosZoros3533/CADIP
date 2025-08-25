import { useParams } from "react-router-dom";


export default function () {
      const params = useParams();

  return (
    <div>Edit Item with {params.id}</div>
  )
}
