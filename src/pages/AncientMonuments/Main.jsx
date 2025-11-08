import GridLayout from "../../components/grid-layout";
import { useOutletContext } from "react-router-dom";
import CardComponent from "@/components/card-component";
import TableComponent from "@/components/table-component";

export default function AncientMonuments() {
  const { isGrid } = useOutletContext();

  const ancientMonuments = [
  {
    id: 1,
    url: "/ancient-monuments/1",
    name: "The castle of Limassol",
    district: "Lemesos",
    town: "LEMESOS",
    recordedBy: "M.Kouali",
  },
  {
    id: 2,
    url: "/ancient-monuments/2",
    name: "The castle of Pafos",
    district: "Pafos",
    town: "PAFOS",
    recordedBy: "N.Zoros",
  },
  {
    id: 3,
    url: "/ancient-monuments/3",
    name: "The castle of Larnaca",
    district: "Larnaka",
    town: "LARNAKA",
    recordedBy: "A.Antonio",
  },
  {
    id: 4,
    url: "/ancient-monuments/4",
    name: "The castle of Ammochostos",
    district: "Ammochostos",
    town: "AMMOCHOSTOS",
    recordedBy: "M.Kouali",
  },
  {
    id: 5,
    url: "/ancient-monuments/5",
    name: "The castle of Keryneia",
    district: "Keryneia",
    town: "KERYNEIA",
    recordedBy: "N.Zoros",
  },
  {
    id: 6,
    url: "/ancient-monuments/6",
    name: "The castle of Lefkosia",
    district: "Lefkosia",
    town: "LEFKOSIA",
    recordedBy: "A.Antonio",
  },
  {
    id: 7,
    url: "/ancient-monuments/7",
    name: "The ancient theater of Kourion",
    district: "Lemesos",
    town: "KOURION",
    recordedBy: "M.Kouali",
  },
  {
    id: 8,
    url: "/ancient-monuments/8",
    name: "The ancient city of Salamis",
    district: "Ammochostos",
    town: "SALAMIS",
    recordedBy: "N.Zoros",
  },
  {
    id: 9,
    url: "/ancient-monuments/9",
    name: "The ancient city of Amathus",
    district: "Lemesos",
    town: "AMATHUS",
    recordedBy: "A.Antonio",
  },
  {
    id: 10,
    url: "/ancient-monuments/10",
    name: "The ancient city of Pafos",
    district: "Pafos",
    town: "PAFOS",
    recordedBy: "M.Kouali",
  },
  {
    id: 11,
    url: "/ancient-monuments/11",
    name: "The ancient city of Kition",
    district: "Larnaka",
    town: "KITION",
    recordedBy: "N.Zoros",
  },
];
  return (
    <>
      {isGrid ? (
        <GridLayout columns={4}>
          {ancientMonuments.map((monument, idx) => (
            <CardComponent key={idx} object={monument} />
          ))}
        </GridLayout>
      ) : (
        <div className="px-4 py-6">
          <div className="overflow-x-auto w-full p-10 border-2 rounded-2xl">
            <TableComponent objects={ancientMonuments}/>
          </div>
        </div>
      )}
    </>
  );
}
