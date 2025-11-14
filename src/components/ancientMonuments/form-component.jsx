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

import LocationTable from "../form-components/location-table";
import ToponymTable from "../form-components/toponym-table";

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

export default function AMForm({ monument = null }) {
  return (
    <Card className="w-full max-w-7xl place-self-center p-4 md:p-6 lg:p-10 my-6 md:my-15">
      <CardHeader className="flex flex-col w-full justify-center items-center">
        {monument ? (
          <>
            <CardTitle>Edit Monument : {monument.id}</CardTitle>
            <CardDescription>Edit and Save this Monument info</CardDescription>
          </>
        ) : (
          <CardTitle>New Monument</CardTitle>
        )}
      </CardHeader>
      <CardContent className="place-self-start w-full max-w-full">
        <form>
          <FieldGroup>
            <FieldSet>
              <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                <FieldGroup className="w-full">
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input placeholder="Castle of Limassol" />
                  </Field>
                  <Field>
                    <FieldLabel>Alternative Name</FieldLabel>
                    <Textarea placeholder="Castle of Limassol" />
                  </Field>
                  <Field>
                    <FieldLabel>Analytical Description</FieldLabel>
                    <Textarea placeholder="Describe the monument" />
                  </Field>
                  <Field>
                    <FieldLabel>Description</FieldLabel>
                    <Textarea placeholder="Describe the monument" />
                  </Field>
                  <Field>
                    <FieldLabel>Monument Number</FieldLabel>
                    <Input placeholder="monument num" />
                  </Field>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center gap-3">
                      <Checkbox id="toggle" />
                      <Label htmlFor="toggle">Record Complete</Label>
                    </div>
                    <Button type="button">View Map</Button>
                  </div>
                </FieldGroup>
                <div className="bg-muted border aspect-square w-50 h-50 rounded-xl"></div>
              </div>
            </FieldSet>
          </FieldGroup>
        </form>
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
            <TabsTrigger value="Documentation">Documentation</TabsTrigger>
            <TabsTrigger value="Recording Details">
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
              <CardFooter className="flex gap-1">
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
