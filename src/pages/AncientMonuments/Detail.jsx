import { entities } from "@/lib/constants";
import { getEntity } from "@/services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [data, setData] = useState({});
  const params = useParams();
  const entity = entities[0];

  useEffect(() => {
    const fetchEntity = async () => {
      try {
        const url = `${entity.fetchUrl}/${params.id}`
        console.log(url);
        
        const response = await getEntity(url);
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
