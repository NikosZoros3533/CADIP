import { useParams } from "react-router-dom";


export default function () {
      const params = useParams();

  return (
    <div>Areas Edit Item with {params.id}</div>
  )
}
