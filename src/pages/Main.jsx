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
import { BookType } from "lucide-react";
import { VocabsCombobox } from "@/components/vocabularies-combobox";

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
          <section className="py-16">
            <div className="container">
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col px-8 py-10 border rounded-4xl">
                  <div className="mb-5 flex size-16 items-center justify-center rounded-full">
                    <BookType className="w-10 h-10" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Thesaurus of Terms
                  </h3>
                  <VocabsCombobox />
                </div>
              </div>
            </div>
          </section>
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
