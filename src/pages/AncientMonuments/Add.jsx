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
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { postMonument } from "@/services/api";
import AMForm from "@/components/ancientMonuments/form-component";

const formSchema = z.object({
  name: z.string().nonempty(),
  description: z.string(),
  isRecordCompleted: z.boolean(),
});

export default function AncientMonumentsAdd() {
  // const form = useForm({
  //   defaultValues: {
  //     name: "",
  //     description: "",
  //     isRecordCompleted: false,
  //   },
  //   validators: {
  //     onSubmit: formSchema,
  //     onBlur: formSchema,
  //   },
  //   onSubmit: async ({ value }) => {
  //     toast("You submitted the following values:", {
  //       description: (
  //         <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
  //           <code>{JSON.stringify(value, null, 2)}</code>
  //         </pre>
  //       ),
  //       position: "bottom-right",
  //       classNames: {
  //         content: "flex flex-col gap-2",
  //       },
  //       style: {
  //         "--border-radius": "calc(var(--radius)  + 4px)",
  //       },
  //     });
  //     postMonument(value);
  //   },
  // });

  return (
    // <div className="flex items-center justify-center p-10">
    //   <div className="w-full p-12">
    //     <form
    //       id="ancient-monuments-add"
    //       onSubmit={(e) => {
    //         e.preventDefault();
    //         form.handleSubmit();
    //       }}
    //     >
    //       <FieldGroup>
    //         <FieldSet>
    //           <div className="flex flex-col items-center">
    //             <FieldLegend>Add a new Ancient Monument</FieldLegend>
    //             <FieldDescription>
    //               All transactions are secure and encrypted
    //             </FieldDescription>
    //           </div>
    //           <FieldGroup>
    //             <form.Field
    //               name="name"
    //               children={(field) => {
    //                 const isInvalid =
    //                   field.state.meta.isTouched && !field.state.meta.isValid;
    //                 return (
    //                   <Field data-invalid={isInvalid}>
    //                     <FieldLabel htmlFor={field.name}>Name</FieldLabel>
    //                     <Input
    //                       id={field.name}
    //                       name={field.name}
    //                       value={field.state.value}
    //                       onBlur={field.handleBlur}
    //                       onChange={(e) => field.handleChange(e.target.value)}
    //                       aria-invalid={isInvalid}
    //                       placeholder="Castle of Limassol"
    //                       autoComplete="off"
    //                     />
    //                     {isInvalid && (
    //                       <FieldError errors={field.state.meta.errors} />
    //                     )}
    //                   </Field>
    //                 );
    //               }}
    //             />
    //             <form.Field
    //               name="description"
    //               children={(field) => {
    //                 const isInvalid =
    //                   field.state.meta.isTouched && !field.state.meta.isValid;
    //                 return (
    //                   <Field data-invalid={isInvalid}>
    //                     <FieldLabel htmlFor={field.name}>
    //                       Description
    //                     </FieldLabel>
    //                     <Textarea
    //                       id={field.name}
    //                       name={field.name}
    //                       value={field.state.value}
    //                       onBlur={field.handleBlur}
    //                       onChange={(e) => field.handleChange(e.target.value)}
    //                       aria-invalid={isInvalid}
    //                       placeholder="Description"
    //                       autoComplete="off"
    //                     />
    //                     {isInvalid && (
    //                       <FieldError errors={field.state.meta.errors} />
    //                     )}
    //                   </Field>
    //                 );
    //               }}
    //             />
    //             <form.Field
    //               name="isRecordCompleted"
    //               children={(field) => {
    //                 const isInvalid =
    //                   field.state.meta.isTouched && !field.state.meta.isValid;
    //                 return (
    //                   <FieldGroup data-slot="checkbox-group">
    //                     <Field data-invalid={isInvalid} orientation="h">
    //                       <Checkbox
    //                         id={field.name}
    //                         name={field.name}
    //                         checked={field.state.value}
    //                         onCheckedChange={(checked) =>
    //                           field.handleChange(checked === true)
    //                         }
    //                       />
    //                       <FieldLabel
    //                         htmlFor={field.name}
    //                         className="flex-none"
    //                       >
    //                         Record Completed
    //                       </FieldLabel>
    //                     </Field>
    //                     {isInvalid && (
    //                       <FieldError errors={field.state.meta.errors} />
    //                     )}
    //                   </FieldGroup>
    //                 );
    //               }}
    //             />
    //           </FieldGroup>
    //         </FieldSet>
    //         <Field orientation="horizontal">
    //           <Button type="submit" form="ancient-monuments-add">
    //             Submit
    //           </Button>
    //           <Button
    //             variant="outline"
    //             type="button"
    //             onClick={() => form.reset()}
    //           >
    //             Reset
    //           </Button>
    //         </Field>
    //       </FieldGroup>
    //     </form>
    //   </div>
    // </div>
    <AMForm />
  );
}
