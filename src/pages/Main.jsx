import { Button } from "@/components/ui/button";
import { actions as features, entities } from "@/lib/constants";
import GridLayout from "@/components/grid-layout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import CollapsibleComponent from "@/components/collapsible";
import { BookType, CircleUserRound } from "lucide-react";
import { VocabsCombobox } from "@/components/vocabularies-combobox";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-[repeat(5,1fr)] gap-2 min-h-full p-6">
        <div className="md:col-span-3 md:row-span-5 flex flex-col gap-4">
          {entities.map((entity) => (
            <CollapsibleComponent key={entity.title} entity={entity} />
          ))}

          <GridLayout columns={2}>
            <Card className="w-full min-w-sm max-w-sm">
              <CardHeader>
                <div className="flex flex-row justify-between py-2 items-center">
                  <CardTitle>Profile</CardTitle>
                  <CircleUserRound />
                </div>
                <CardDescription>Manage your profile settings</CardDescription>
              </CardHeader>
              <CardAction>
                <Button variant="link">Go to Settings</Button>
              </CardAction>
            </Card>
            <Card className="w-full min-w-sm max-w-sm">
              <CardHeader>
                <div className="flex flex-row justify-between py-2 items-center">
                  <CardTitle>Thesaurus of Terms</CardTitle>
                  <BookType />
                </div>
                <CardDescription>Manage your profile settings</CardDescription>
              </CardHeader>
              <CardAction>
                <Button variant="link">Go to Terms</Button>
              </CardAction>
            </Card>
          </GridLayout>
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
