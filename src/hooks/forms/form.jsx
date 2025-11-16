import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import MultiCheckbox from "@/components/vocabs/MultiCheckbox";
import LocationTable from "@/components/form-components/location-table";
import ToponymTable from "@/components/form-components/toponym-table";

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldContext: fieldContext,
  formContext: formContext,
  fieldComponents: {
    MultiCheckbox: MultiCheckbox,
    LocationTable: LocationTable,
    ToponymTable: ToponymTable,
  },
  formComponents: {},
});
