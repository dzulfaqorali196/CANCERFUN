"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/schema";
import { useFormContext } from "@/components/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";

type FormData = {
  currentRole: string;
  educationalBackground: string;
  expertise: string;
  cancerResearch: "yes" | "no";
  publications: string;
  previousExperience?: string | undefined;
};

export default function Page2() {
  const { formData, updateFormData } = useFormContext();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: yupResolver(
      schema.pick([
        "currentRole",
        "educationalBackground",
        "expertise",
        "cancerResearch",
        "publications",
        // "previousExperience",
      ])
    ),
    defaultValues: {
      currentRole: formData.currentRole,
      educationalBackground: formData.educationalBackground,
      expertise: formData.expertise,
      cancerResearch: formData.cancerResearch,
      publications: formData.publications,
      previousExperience: formData.previousExperience,
    },
  });

  const onSubmit = (data: FormData) => {
    updateFormData(data);
    router.push("/committee/application/page3");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-16">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Background & Expertise</CardTitle>
          <CardDescription>
            Please provide details about your background and expertise.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="currentRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Role / Position</FormLabel>
                    <FormControl>
                      <Input placeholder="Senior Researcher" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="educationalBackground"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Educational Background</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="PhD in Biology, University of Example, 2018"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expertise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Field(s) of Expertise</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Oncology, Bioinformatics, Data Science"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cancerResearch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Have you conducted or contributed to cancer-related
                      research before?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="publications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Link(s) to Publications / Google Scholar / ORCID / GitHub
                      / Website
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://scholar.google.com/..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="previousExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Previous Experience in Grant Review, Research Funding, or
                      DAOs (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Served as a grant reviewer for NIH, 2020-2022"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/committee/application/page1")}
                >
                  Previous
                </Button>
                <Button type="submit">Next</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
