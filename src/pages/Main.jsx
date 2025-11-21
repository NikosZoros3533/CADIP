import { Button } from "@/components/ui/button";
import { actions as features, entities } from "@/lib/constants";
import GridLayout from "@/components/grid-layout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";


export default function Main() {
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
      <div className="flex p-4 md:p-6 min-h-screen">
        <div className="w-full border rounded-4xl"></div>
      </div>
    </>
  );
}
