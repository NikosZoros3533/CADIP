import GridLayout from "../../components/grid-layout";
import { useOutletContext } from "react-router-dom";
import TableComponent from "@/components/table-component";
import { getMonuments } from "@/services/ancient-monuments/api";
import { useEffect, useState } from "react";
import AMCardComponent from "@/components/ancientMonuments/card-component";
import { Spinner } from "@/components/ui/spinner";

export default function AncientMonuments() {
  const { isGrid } = useOutletContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchEntities = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getMonuments();
        setData(response);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchEntities();
  }, []);

  return (
    <div>
      {loading && (
        <div className="h-screen flex items-start justify-center">
          <Spinner className="w-10 h-10" />
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && isGrid ? (
        <GridLayout columns={4}>
          {data.map((entity) => (
            <AMCardComponent key={entity.id} object={entity} />
          ))}
        </GridLayout>
      ) : (
        <div className="px-4 py-6">
          <div className="overflow-x-auto w-full p-10 border-2 rounded-2xl">
            <TableComponent objects={data} />
          </div>
        </div>
      )}
    </div>
  );
}
