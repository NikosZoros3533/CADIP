import React from "react";
import * as z from "zod";
import {
  Field,
  FieldDescription,
  FieldLegend,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
const formSchema = z.object({
  name: z.string().nonempty(),
  description: z.string(),
  isRecordCompleted: z.boolean(),
});

export default function AncientMonumentsAdd() {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      isRecordCompleted: false,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        },
      });
      console.log(value);
    },
  });

  return (
    <div className="flex items-center justify-center p-12">
      <div className="w-full max-w-md p-14">
        <form
          id="ancient-monuments-add"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Add a new Ancient Monument</FieldLegend>
              <FieldDescription>
                All transactions are secure and encrypted
              </FieldDescription>
              <FieldGroup>
                <form.Field
                  name="name"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="Castle of Limassol"
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="description"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>
                          Description
                        </FieldLabel>
                        <Textarea
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="Description"
                          autoComplete="off"
                        />
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                />
                <form.Field
                  name="isRecordedCompleted"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid} orientation="horizontal">
                        <FieldLabel htmlFor={field.name}>
                          Record Completed
                        </FieldLabel>
                        <Checkbox
                          id={field.name}
                          name={field.name}
                          checked={field.state.value}
                          onCheckedChange={(checked) =>
                            field.handleChange(checked === true)
                          }
                        />
                      </Field>
                    );
                  }}
                />
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Button type="submit" form="ancient-monuments-add">
                Submit
              </Button>
              <Button
                variant="outline"
                type="button"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
