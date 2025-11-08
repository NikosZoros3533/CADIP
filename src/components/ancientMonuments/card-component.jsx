import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function CardComponent({ object }) {
  const navigate = useNavigate();
  return (
    <div className="bg-card rounded-2xl shadow-md border overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Limassol_01-2017_img21_Castle_exterior.jpg"
          alt={`Photo of ${object.name}`}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold line-clamp-2">
          {object.name}
        </h3>
        <div className="text-sm text-foreground/60 mt-2 space-y-1 flex-1">
          <p className="truncate">
            <span className="font-medium">District:</span>{" "}
            {object.district}
          </p>
          <p className="truncate">
            <span className="font-medium">Town:</span> {object.town}
          </p>
          <p className="truncate">
            <span className="font-medium">Recorded by:</span>{" "}
            {object.recordedBy}
          </p>
        </div>
        {/* Actions pinned to bottom */}
        <div className="flex justify-end gap-2 mt-auto py-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => navigate(object.url)}
          >
            Show
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate(`${object.url}/edit`)}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}
