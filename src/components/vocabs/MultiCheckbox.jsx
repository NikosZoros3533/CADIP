import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useFieldContext } from "@/hooks/forms/form-context";

export default function MultiCheckbox({ title, vocab }) {
  const [open, setOpen] = useState(false);
  // const [selectedValues, setSelectedValues] = useState([]);
  const field = useFieldContext();
  console.log(field.state.value);

  const MAX_SELECTIONS = vocab.length;
  const isMaxReached = field.state.value.length >= MAX_SELECTIONS;

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[250px] justify-between"
          role="combobox"
          variant="outline"
        >
          {field.state.value.length > 0 ? (
            <span>
              {field.state.value.length}/{MAX_SELECTIONS} selected
            </span>
          ) : (
            `Select ${title}`
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder={`Select ${title}`} />
          <CommandList>
            <CommandEmpty>No interest found.</CommandEmpty>
           
            <CommandGroup>
              {vocab.map((item) => {
                const isSelected = field.state.value.includes(item.id);
                const isDisabled = !isSelected && isMaxReached;

                return (
                  <CommandItem
                    className={cn(isDisabled && "opacity-50")}
                    disabled={isDisabled}
                    key={item.id}
                    onSelect={(currentValue) => {
                      if (isDisabled) {
                        return;
                      }
                      console.log(currentValue);
                      
                      field.setValue(
                        field.state.value.includes(currentValue)
                          ? field.state.value.filter((v) => v !== currentValue) 
                          : [...field.state.value, currentValue]
                      );
                      
                    }}
                    value={item.id}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        isSelected ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {item.labelEn}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
