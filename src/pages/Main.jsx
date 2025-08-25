import { Button } from "@/components/ui/button";
import { actions as features, entities, ancientMonuments } from "@/lib/objects";
import GridLayout from "@/components/grid-layout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Main() {
  const navigate = useNavigate();
  return (
    <>
      <GridLayout columns={2}>
        {features.map((feature) => (
          <Popover key={feature.name}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="cursor-pointer" size="xl">
                <feature.icon />
                {feature.name}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="text-sm text-accent-foreground flex flex-col items-center">
                {feature.description}
              </div>
              <div className="mt-4 border-t pt-2 flex gap-2 justify-center">
                {entities.map((entity) => (
                  <Button
                    key={entity.title}
                    variant="outline"
                    className="cursor-pointer mb-2"
                    size="icon"
                    asChild
                  >
                    <Link to={`${entity.url}/${feature.helper}`}>
                      <entity.icon />
                    </Link>
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </GridLayout>
      <div className="container mx-auto px-4">
        <Collapsible className="my-4 bg-card">
          <CollapsibleTrigger className="w-full h-full cursor-pointer hover:bg-accent p-3">
            Ancient Monuments
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Declaration/Expropriation name</TableHead>
                  <TableHead>District</TableHead>
                  <TableHead>Town/Village/Quarter</TableHead>
                  <TableHead>Recorded by</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ancientMonuments.map((monument) => (
                  <TableRow key={monument.id}>
                    <TableCell className="font-medium">{monument.id}</TableCell>
                    <TableCell>{monument.name}</TableCell>
                    <TableCell>{monument.district}</TableCell>
                    <TableCell>{monument.town}</TableCell>
                    <TableCell>{monument.recordedBy}</TableCell>
                    <TableCell className="text-right">
                      <div>
                        <Button
                          onClick={() =>
                            navigate(`/ancient-monuments/${monument.id}`)
                          }
                          variant="secondary"
                          size="small"
                          className="mr-1 text-xs p-1 cursor-pointer"
                        >
                          Show
                        </Button>
                        <Button
                          onClick={() =>
                            navigate(`/ancient-monuments/${monument.id}/edit`)
                          }
                          size="small"
                          variant="outline"
                          className="text-xs p-1 cursor-pointer"
                        >
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CollapsibleContent>
        </Collapsible>

      </div>
    </>
  );
}
