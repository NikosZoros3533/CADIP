import { formOptions } from "@tanstack/react-form";

export const monumentOpts = formOptions({
  defaultValues: {
    name: "",
    description: "",
    accessibilities: [],
  },
});
