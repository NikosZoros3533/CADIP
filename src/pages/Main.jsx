import { Button } from "@/components/ui/button";
import { actions as features, entities } from "@/lib/entities";
import GridLayout from "@/components/grid-layout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link} from "react-router-dom";


export default function Main() {


 

  return (
    <GridLayout columns={4}>
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
            <div className="mt-2 border-t pt-2 flex gap-2 justify-center">
              {entities.map((entity) => (
                <Button
                  key={entity.title}
                  variant="outline"
                  className="cursor-pointer mb-2"
                  size="icon"
                  asChild
                >
                  <Link to={`${entity.url}/${feature.helper}`}>
                    <entity.icon className="w-4 h-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </GridLayout>
  );
}
