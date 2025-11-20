import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FieldGroup,
  FieldSet,
  FieldLabel,
  FieldError,
  Field,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import {
  checkEntityDefaultKeys,
  defaultMonumentValues,
  monumentSchema,
} from "@/lib/register-form/formUtils";
import { useAppForm } from "@/hooks/forms/form";
import { Separator } from "../ui/separator";
import { formOptions } from "@tanstack/react-form";
import { useState } from "react";

const vocAcc = [
  { id: "1", labelEn: "Fully accessible site" },
  { id: "2", labelEn: "Partially accessible with assistance" },
  { id: "3", labelEn: "Not accessible to visitors" },
];
// const testVoc = [
//   { id: "1", value: "nicosia", label: "Nicosia" },
//   { id: "2", value: "larnaca", label: "Larnaca" },
//   { id: "3", value: "limassol", label: "Limassol" },
// ];
// const locationData = [
//   { district: "1", town: "2", quarter: "3" },
//   { district: "2", town: "3", quarter: "1" },
//   { district: "3", town: "1", quarter: "2" },
// ];

export function AMForm({ monument = null }) {
  const monumentValues = { ...defaultMonumentValues };
  const [editable, setEditable] = useState(!monument);

  //Check keys existence and set default values
  checkEntityDefaultKeys(monument, monumentValues);

  const monumentFormOpts = formOptions({
    defaultValues: monumentValues,
  });

  console.log(monumentFormOpts);

  const form = useAppForm({
    ...monumentFormOpts,
    validators: {
      onChange: monumentSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Card className="w-full  mx-auto  p-3  md:p-4 lg:p-6 my-4 md:my-8 text-base ">
      <CardHeader className="flex flex-col w-full justify-center items-center pb-2">
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
      <Separator />
      <CardContent className="place-self-start w-full max-w-full pt-2 pb-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <FieldSet>
              <div className="flex flex-col @md:flex-row w-full gap-6">
                {/* LEFT COLUMN – more compact vertical spacing */}
                <FieldGroup className="w-full md:flex-[2] space-y-1">
                  {/* Name */}
                  <form.Field name="name">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <div className="space-y-1.5">
                          <FieldLabel htmlFor={field.name}>
                            Name<span className="text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            id={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Castle of Limassol"
                            autoComplete="off"
                            disabled={!editable}
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </div>
                      );
                    }}
                  </form.Field>

                  {/* Alternative Name */}
                  <form.Field name="alternativeName">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <div className="space-y-1.5">
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
                            className="min-h-[70px]"
                            disabled={!editable}
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </div>
                      );
                    }}
                  </form.Field>

                  {/* DESCRIPTION + ANALYTICAL DESCRIPTION in a row on lg */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <form.Field name="description">
                      {(field) => {
                        const isInvalid =
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid;
                        return (
                          <div className="space-y-1.5">
                            <FieldLabel htmlFor={field.name}>
                              Description
                              <span className="text-destructive">*</span>
                            </FieldLabel>
                            <Textarea
                              id={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              placeholder="Describe the monument"
                              className="min-h-[80px]"
                              disabled={!editable}
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </div>
                        );
                      }}
                    </form.Field>

                    <form.Field name="analyticalDescription">
                      {(field) => {
                        const isInvalid =
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid;
                        return (
                          <div className="space-y-1.5">
                            <FieldLabel htmlFor={field.name}>
                              Analytical Description
                            </FieldLabel>
                            <Textarea
                              id={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              placeholder="Describe the monument"
                              className="min-h-[80px]"
                              disabled={!editable}
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </div>
                        );
                      }}
                    </form.Field>
                  </div>

                  {/* MONUMENT NUMBER + RECORD COMPLETE + VIEW MAP in a single row on lg */}
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-evenly xl:gap-4 pt-1">
                    {/* Monument Number */}
                    <form.Field name="monumentNumber">
                      {(field) => {
                        const isInvalid =
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid;
                        return (
                          <Field
                            orientation="horizontal"
                            className="space-y-1.5 min-w-[60px] max-w-2xs "
                          >
                            <FieldLabel htmlFor={field.name}>
                              Monument Number
                            </FieldLabel>
                            <Input
                              id={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              aria-invalid={isInvalid}
                              placeholder="monument num"
                              autoComplete="off"
                              disabled={!editable}
                            />
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </Field>
                        );
                      }}
                    </form.Field>

                    {/* Record Complete */}
                    <div className="flex items-center gap-2">
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
                                disabled={!editable}
                              />
                              <Label htmlFor={field.name}>
                                Record Complete
                              </Label>
                            </>
                          );
                        }}
                      </form.Field>
                    </div>

                    {/* View Map Button */}
                    {monument && (
                      <div className="flex justify-start lg:justify-end">
                        <Button type="button" variant="secondary">
                          View Map
                          <MapPin className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </FieldGroup>

                {/* RIGHT COLUMN – picture placeholder, wider but not taller than needed */}
                {monument && (
                  <div className="w-full md:flex-1 flex justify-center md:justify-end">
                    <div className="bg-muted rounded-xl w-full  lg:max-w-md aspect-video" />
                  </div>
                )}
              </div>
            </FieldSet>
          </FieldGroup>

          {/* FROM HERE DOWN: EXACTLY YOUR ORIGINAL TABS SECTION */}
          <Tabs defaultValue="location" className="py-6 w-full">
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
            <TabsContent value="location" className="w-full @lg:max-w-7xl">
              <Card className="dark:drop-shadow-xl border-2">
                <CardContent className="flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row items-start justify-center sm:items-center gap-6">
                    <form.AppField name="accessibilities" mode="array">
                      {(field) => {
                        return (
                          <>
                            <FieldLabel>Accessibility</FieldLabel>
                            <field.MultiCheckbox
                              title="accessibility"
                              vocab={vocAcc}
                              disabled={!editable}
                            />
                          </>
                        );
                      }}
                    </form.AppField>
                  </div>
                  <div className="flex flex-wrap flex-col md:flex-row md:justify-evenly gap-4 p-3">
                    <form.AppField name="location">
                      {(field) => (
                        <>
                          <field.LocationTable disabled={!editable} />
                        </>
                      )}
                    </form.AppField>
                    <form.AppField name="toponym">
                      {(field) => (
                        <>
                          <field.ToponymTable disabled={!editable} />
                        </>
                      )}
                    </form.AppField>
                  </div>
                  <form.Field orientation="horizontal" name="plotsDeclExpro">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <>
                          <FieldLabel htmlFor={field.name}>
                            Plots as Described on Declaration/Expropriation
                          </FieldLabel>
                          <Textarea
                            placeholder="Describe the monument"
                            className="w-full "
                            id={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            disabled={!editable}
                          />
                        </>
                      );
                    }}
                  </form.Field>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="flex w-full gap-2 mt-4">
            <Button type="submit">Submit</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset();
                setEditable(false);
              }}
            >
              Reset All
            </Button>

            {!editable && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setEditable(true)}
              >
                Edit All
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
