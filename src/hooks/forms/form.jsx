import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import MultiCheckbox from "@/components/vocabs/MultiCheckbox";

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldContext: fieldContext,
  formContext: formContext,
  fieldComponents: { MultiCheckbox: MultiCheckbox },
  formComponents: {},
});
