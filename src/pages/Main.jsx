import { Button } from "@/components/ui/button";
import {
  actions as features,
  entities,
  ancientMonuments,
  movableAntiquities,
  controlledAreas,
  areasUnderTempReq,
  surveyedAreas,
} from "@/lib/objects";
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
import { ChevronsUpDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Main() {
  const navigate = useNavigate();
  const handleShow = (id, url) => navigate(`/${url}/${id}`);
  const handleEdit = (id, url) => navigate(`/${url}/${id}/edit`);
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
              <div className="mt-4 border-t pt-2 flex gap-x-2 justify-center">
                {entities.map((entity) => (
                  <Button
                    key={entity.title}
                    variant="outline"
                    className="cursor-pointer"
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
      <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-[repeat(5,1fr)] gap-2 min-h-full p-6">
        <div className="md:col-span-3 md:row-span-5 flex flex-col gap-4">
          <Collapsible className="bg-card flex flex-col gap-2 border p-1 rounded-lg">
            <div className="flex items-center justify-between gap-4 px-4">
              <h4 className="text-sm font-semibold">Ancient Monuments</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-6 pb-4 ">
              <ScrollArea className="h-72">
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
                        <TableCell className="font-medium">
                          {monument.id}
                        </TableCell>
                        <TableCell>{monument.name}</TableCell>
                        <TableCell>{monument.district}</TableCell>
                        <TableCell>{monument.town}</TableCell>
                        <TableCell>{monument.recordedBy}</TableCell>
                        <TableCell className="text-right">
                          <div>
                            <Button
                              onClick={() =>
                                handleShow(monument.id, "ancient-monuments")
                              }
                              variant="secondary"
                              size="small"
                              className="mr-1 text-xs p-1 cursor-pointer"
                              aria-label={`Show details for ${monument.name}`}
                            >
                              Show
                            </Button>
                            <Button
                              onClick={() =>
                                handleEdit(monument.id, "ancient-monuments")
                              }
                              size="small"
                              variant="outline"
                              className="text-xs p-1 cursor-pointer"
                              aria-label={`Edit ${monument.name}`}
                            >
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="bg-card flex flex-col gap-2 border p-1 rounded-lg">
            <div className="flex items-center justify-between gap-4 px-4">
              <h4 className="text-sm font-semibold">Movable Antiquities</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 pb-4 ">
              <ScrollArea className="h-72">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Inv.Number</TableHead>
                      <TableHead>District</TableHead>
                      <TableHead>Town/Village/Quarter</TableHead>
                      <TableHead>Recorded by</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {movableAntiquities.map((monument) => (
                      <TableRow key={monument.id}>
                        <TableCell className="font-medium">
                          {monument.id}
                        </TableCell>
                        <TableCell>{monument.name}</TableCell>
                        <TableCell>{monument.district}</TableCell>
                        <TableCell>{monument.town}</TableCell>
                        <TableCell>{monument.recordedBy}</TableCell>
                        <TableCell className="text-right">
                          <div>
                            <Button
                              onClick={() =>
                                handleShow(monument.id, "movable-antiquities")
                              }
                              variant="secondary"
                              size="small"
                              className="mr-1 text-xs p-1 cursor-pointer"
                              aria-label={`Show details for ${monument.name}`}
                            >
                              Show
                            </Button>
                            <Button
                              onClick={() =>
                                handleEdit(monument.id, "movable-antiquities")
                              }
                              size="small"
                              variant="outline"
                              className="text-xs p-1 cursor-pointer"
                              aria-label={`Edit ${monument.name}`}
                            >
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="bg-card flex flex-col gap-2 border p-1 rounded-lg">
            <div className="flex items-center justify-between gap-4 px-4">
              <h4 className="text-sm font-semibold">Controlled Areas</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 pb-4 ">
              <ScrollArea className="h-72">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>District</TableHead>
                      <TableHead>Town/Village/Quarter</TableHead>
                      <TableHead>Recorded by</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {controlledAreas.map((monument) => (
                      <TableRow key={monument.id}>
                        <TableCell className="font-medium">
                          {monument.id}
                        </TableCell>
                        <TableCell>{monument.name}</TableCell>
                        <TableCell>{monument.district}</TableCell>
                        <TableCell>{monument.town}</TableCell>
                        <TableCell>{monument.recordedBy}</TableCell>
                        <TableCell className="text-right">
                          <div>
                            <Button
                              onClick={() =>
                                handleShow(monument.id, "controlled-areas")
                              }
                              variant="secondary"
                              size="small"
                              className="mr-1 text-xs p-1 cursor-pointer"
                              aria-label={`Show details for ${monument.name}`}
                            >
                              Show
                            </Button>
                            <Button
                              onClick={() =>
                                handleEdit(monument.id, "controlled-areas")
                              }
                              size="small"
                              variant="outline"
                              className="text-xs p-1 cursor-pointer"
                              aria-label={`Edit ${monument.name}`}
                            >
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="bg-card flex flex-col gap-2 border p-1 rounded-lg">
            <div className="flex items-center justify-between gap-4 px-4">
              <h4 className="text-sm font-semibold">
                Areas Under Temporary Requisition
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 pb-4 ">
              <ScrollArea className="h-72">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>District</TableHead>
                      <TableHead>Town/Village/Quarter</TableHead>
                      <TableHead>Recorded by</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {areasUnderTempReq.map((monument) => (
                      <TableRow key={monument.id}>
                        <TableCell className="font-medium">
                          {monument.id}
                        </TableCell>
                        <TableCell>{monument.name}</TableCell>
                        <TableCell>{monument.district}</TableCell>
                        <TableCell>{monument.town}</TableCell>
                        <TableCell>{monument.recordedBy}</TableCell>
                        <TableCell className="text-right">
                          <div>
                            <Button
                              onClick={() =>
                                handleShow(
                                  monument.id,
                                  "areas-under-temp-requisition"
                                )
                              }
                              variant="secondary"
                              size="small"
                              className="mr-1 text-xs p-1 cursor-pointer"
                              aria-label={`Show details for ${monument.name}`}
                            >
                              Show
                            </Button>
                            <Button
                              onClick={() =>
                                handleEdit(
                                  monument.id,
                                  "areas-under-temp-requisition"
                                )
                              }
                              size="small"
                              variant="outline"
                              className="text-xs p-1 cursor-pointer"
                              aria-label={`Edit ${monument.name}`}
                            >
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="bg-card flex flex-col gap-2 border p-1 rounded-lg">
            <div className="flex items-center justify-between gap-4 px-4">
              <h4 className="text-sm font-semibold">Surveyed Areas</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 pb-4 ">
              <ScrollArea className="h-72">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>District</TableHead>
                      <TableHead>Town/Village/Quarter</TableHead>
                      <TableHead>Recorded by</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {surveyedAreas.map((monument) => (
                      <TableRow key={monument.id}>
                        <TableCell className="font-medium">
                          {monument.id}
                        </TableCell>
                        <TableCell>{monument.name}</TableCell>
                        <TableCell>{monument.district}</TableCell>
                        <TableCell>{monument.town}</TableCell>
                        <TableCell>{monument.recordedBy}</TableCell>
                        <TableCell className="text-right">
                          <div>
                            <Button
                              onClick={() =>
                                handleShow(monument.id, "surveyed-areas")
                              }
                              variant="secondary"
                              size="small"
                              className="mr-1 text-xs p-1 cursor-pointer"
                              aria-label={`Show details for ${monument.name}`}
                            >
                              Show
                            </Button>
                            <Button
                              onClick={() =>
                                handleEdit(monument.id, "surveyed-areas")
                              }
                              size="small"
                              variant="outline"
                              className="text-xs p-1 cursor-pointer"
                              aria-label={`Edit ${monument.name}`}
                            >
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="md:col-span-2 md:col-start-4 md:row-span-3 bg-muted rounded-lg flex items-center justify-center">
          <span className=" text-muted-foreground text-lg">
            [Map Placeholder]
          </span>
        </div>
      </div>
    </>
  );
}
