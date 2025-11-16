import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import MultiCheckbox from "../vocabs/MultiCheckbox";
import { MapPin } from "lucide-react";
import LocationTable from "../form-components/location-table";
import ToponymTable from "../form-components/toponym-table";
import * as z from "zod";
import { formOptions, useForm } from "@tanstack/react-form";

const vocAcc = [
  { id: "1", labelEn: "Fully accessible site" },
  { id: "2", labelEn: "Partially accessible with assistance" },
  { id: "3", labelEn: "Not accessible to visitors" },
];

const locationData = [
  { district: "1", town: "2", quarter: "3" },
  { district: "2", town: "3", quarter: "1" },
  { district: "3", town: "1", quarter: "2" },
];

const monumentSchema = z.object({
  name: z.string().nonempty("Name is required"),
  alternativeName: z.string().optional(),
  analyticalDescription: z.string().optional(),
  description: z.string().nonempty("Description is required"),
  monumentNumber: z.string().optional(),
  isRecordComplete: z.boolean(),
});

const defaultMonumentValues = {
  name: "",
  alternativeName: "",
  analyticalDescription: "",
  description: "",
  monumentNumber: "",
  isRecordComplete: false,
};

const formOpts = formOptions({
  defaultValues: defaultMonumentValues,
});

export default function AMForm({ monument = null }) {
  const form = useForm({
    ...formOpts,
    validators: {
      onSubmit: monumentSchema,
      onBlur: monumentSchema,
      onChange: monumentSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Card className="w-full max-w-7xl place-self-center p-4 md:p-6 lg:p-10 my-6 md:my-15">
      <CardHeader className="flex flex-col w-full justify-center items-center">
        {monument ? (
          <>
            <CardTitle>Edit Monument : {monument.id}</CardTitle>
            <CardDescription>Edit and Save this Monument info</CardDescription>
          </>
        ) : (
          <>
            <CardTitle>New Monument</CardTitle>
            <CardDescription>
              Fill in the details to add a new Monument
            </CardDescription>
          </>
        )}
      </CardHeader>
      <CardContent className="place-self-start w-full max-w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <FieldSet>
              <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                <FieldGroup className="w-full">
                  <form.Field name="name">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <>
                          <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                          <Input
                            id={field.name}
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
                        </>
                      );
                    }}
                  </form.Field>
                  <form.Field name="alternativeName">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <>
                          <FieldLabel htmlFor={field.name}>
                            Alternative Name
                          </FieldLabel>
                          <Textarea
                            id={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="Castle of Limassol"
                            aria-invalid={isInvalid}
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </>
                      );
                    }}
                  </form.Field>
                  <form.Field name="analyticalDescription">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <>
                          <FieldLabel htmlFor={field.name}>
                            Analytical Description
                          </FieldLabel>
                          <Textarea
                            id={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Describe the monument"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </>
                      );
                    }}
                  </form.Field>
                  <form.Field name="description">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <>
                          <FieldLabel htmlFor={field.name}>
                            Description
                          </FieldLabel>
                          <Textarea
                            id={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Describe the monument"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </>
                      );
                    }}
                  </form.Field>
                  <form.Field name="monumentNumber">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <>
                          <FieldLabel htmlFor={field.name}>
                            Monument Number
                          </FieldLabel>
                          <Input
                            id={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="monument num"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </>
                      );
                    }}
                  </form.Field>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center gap-3">
                      <form.Field name="isRecordComplete">
                        {(field) => {
                          return (
                            <>
                              <Checkbox
                                id={field.name}
                                checked={field.state.value}
                                onCheckedChange={(checked) =>
                                  field.handleChange(checked === true)
                                }
                              />
                              <Label htmlFor={field.name}>
                                Record Complete
                              </Label>
                            </>
                          );
                        }}
                      </form.Field>
                    </div>
                    <Button type="button">
                      View Map
                      <MapPin />
                    </Button>
                  </div>
                </FieldGroup>
                <div className="bg-muted border aspect-square w-50 h-50 rounded-xl"></div>
              </div>
            </FieldSet>
          </FieldGroup>
          {/* <Tabs defaultValue="location" className="py-6 w-full">
            <TabsList className="flex flex-wrap lg:flex-row gap-2 h-auto">
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="function">Use/Function</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              <TabsTrigger value="condition">Physical Cond</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="setting">Setting</TabsTrigger>
              <TabsTrigger value="associations">Associations</TabsTrigger>
              <TabsTrigger value="protection">
                Protection/Legal Status
              </TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="recordingDetails">
                Recording Details
              </TabsTrigger>
            </TabsList>
            <TabsContent value="location" className="w-full lg:min-w-4xl">
              <Card className="dark:drop-shadow-xl border-2">
                <CardContent className="flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row items-start justify-center sm:items-center gap-6">
                    <FieldLabel>Accessibility</FieldLabel>
                    <MultiCheckbox title="accessibility" vocab={vocAcc} />
                  </div>
                  <div className="flex flex-wrap flex-col md:flex-row md:justify-evenly gap-4 p-3">
                    <LocationTable />
                    <ToponymTable />
                  </div>
                  <Field orientation="horizontal">
                    <FieldLabel>Analytical Description</FieldLabel>
                    <Textarea
                      placeholder="Describe the monument"
                      className="w-full "
                    />
                  </Field>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="secondary">Save changes</Button>
                  <Button variant="outline">Reset</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs> */}
          <Button type="submit" className="mt-6">
            Submit
          </Button>
          <Button
            type="button"
            className="ml-2"
            variant="outline"
            onClick={() => form.reset()}
          >
            Reset All
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
