import { formOptions } from "@tanstack/react-form";
import * as z from "zod";

export const monumentSchema = z.object({
  name: z.string().nonempty("Name is required"),
  alternativeName: z.string().optional(),
  analyticalDescription: z.string().optional(),
  description: z.string().nonempty("Description is required"),
  monumentNumber: z.string().optional(),
  isRecordComplete: z.boolean(),
  accessibilities: z.array(z.string()).optional(),
  location: z.object({
    district: z.string().optional(),
    town: z.string().optional(),
    quarter: z.string().optional(),
  }),
  toponym: z.string().optional(),
  plotsDeclExpro: z.string().optional(),
});

export const defaultMonumentValues = {
  name: "",
  alternativeName: "",
  analyticalDescription: "",
  description: "",
  monumentNumber: "",
  isRecordComplete: false,
  accessibilities: [],
  location: {
    district: "",
    town: "",
    quarter: "",
  },
  toponym: "",
  plotsDeclExpro: "",
};

export const monumentFormOpts = formOptions({
  defaultValues: defaultMonumentValues,
});
