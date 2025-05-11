"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/schema";
import { useFormContext } from "@/components/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";

type FormData = {
  hoursPerMonth: number;
  contributions?: string[];
  conflictOfInterest: "yes" | "no";
};

const contributionOptions = [
  "Reviewing applications for funding",
  "Scientific advisory for selected projects",
  "Governance and protocol development",
  "Community-building / education",
  "Public speaking / representation of CancerFun",
  "Networking with funders or researchers",
];

export default function Page4() {
  const { formData, updateFormData } = useFormContext();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: yupResolver(
      schema.pick([
        "hoursPerMonth",
        // "contributions",
        "conflictOfInterest",
      ])
    ),
    defaultValues: {
      hoursPerMonth: formData.hoursPerMonth,
      contributions: formData.contributions,
      conflictOfInterest: formData.conflictOfInterest,
    },
  });

  const onSubmit = (data: FormData) => {
    updateFormData(data);
    router.push("/committee/application/page5");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-16">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Involvement & Availability</CardTitle>
          <CardDescription>
            Please specify your availability and areas of contribution.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="hoursPerMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How many hours per month can you realistically contribute?
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="10"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contributions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Which of the following are you interested in contributing
                      to? (Check all that apply)
                    </FormLabel>
                    <div className="space-y-2">
                      {contributionOptions.map((option) => (
                        <FormItem
                          key={option}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...(field.value || []), option]
                                  : field.value?.filter(
                                      (val: string) => val !== option
                                    ) || [];
                                field.onChange(newValue);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="conflictOfInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Are you currently involved in any organizations that could
                      present a conflict of interest?
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
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/committee/application/page3")}
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
