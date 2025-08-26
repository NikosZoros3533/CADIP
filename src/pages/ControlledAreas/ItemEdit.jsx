import { useParams } from "react-router-dom";


export default function () {
      const params = useParams();

  return (
    <div>Ancient Edit Item with {params.id}</div>
  )
}
