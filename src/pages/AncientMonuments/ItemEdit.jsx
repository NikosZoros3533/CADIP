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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
export default function () {
  const params = useParams();

  return (
    <Card className="w-full max-w-7xl place-self-center p-10 my-15">
      <CardHeader>
        <CardTitle>Edit Monument : {params.id}</CardTitle>
        <CardDescription>Edit and Save this Monument info</CardDescription>
      </CardHeader>
      <CardContent className="place-self-start w-full max-w-full">
        <form>
          <FieldGroup>
            <FieldSet>
              <div className="flex w-full justify-between gap-4">
                <FieldGroup>
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
                </FieldGroup>
                <div className="flex flex-col justify-between">
                  <div className="h-60 w-100 bg-muted rounded-xl"></div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="toggle" />
                    <Label htmlFor="toggle">Record Complete</Label>
                  </div>
                </div>
              </div>
            </FieldSet>
          </FieldGroup>
        </form>
        <Tabs defaultValue="location" className="py-6">
          <TabsList>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="Use/Function">Use/Function</TabsTrigger>
            <TabsTrigger value="Manufacturing">Manufacturing</TabsTrigger>
            <TabsTrigger value="Physical Cond.">Physical Cond</TabsTrigger>
            <TabsTrigger value="Description">Description</TabsTrigger>
            <TabsTrigger value="Setting">Setting</TabsTrigger>
            <TabsTrigger value="Associations">Associations</TabsTrigger>
            <TabsTrigger value="Protection/Legal Status">
              Protection/Legal Status
            </TabsTrigger>
            <TabsTrigger value="Documentation">Documentation</TabsTrigger>
            <TabsTrigger value="Recording Details">
              Recording Details
            </TabsTrigger>
          </TabsList>
          <TabsContent value="location">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 ">
                <div className="grid gap-3">
                  <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Input id="tabs-demo-username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
