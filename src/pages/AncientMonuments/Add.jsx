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
import { AMFormCompact } from "@/components/ancientMonuments/form-component2";

const formSchema = z.object({
  name: z.string().nonempty(),
  description: z.string(),
  isRecordCompleted: z.boolean(),
});

export default function AncientMonumentsAdd() {
  

  return (
    // <AMForm />
    <AMFormCompact/>
  );
}
