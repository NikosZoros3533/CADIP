import { getMonument } from "@/services/ancient-monuments/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [data, setData] = useState({});
  const params = useParams();
  const id = parseInt(params.id);

  useEffect(() => {
    const fetchEntity = async () => {
      try {
        const response = await getMonument(id);
        setData(response);
      } catch (error) {
        console.log("Failed to fetch");
      }
    };
    fetchEntity();
  }, []);

  return (
    <div>
      <ul>
        <li>{data?.name}</li>
        <li>{data?.plotsDecExpro}</li>
        <li>{data?.environment}</li>
        <li>{data?.monumentsInCloseProximity}</li>
        <li>{data?.associatedHistoricalFiguresEvents}</li>
        <li>{data?.gazetteNumber}</li>
      </ul>
    </div>
  );
}
