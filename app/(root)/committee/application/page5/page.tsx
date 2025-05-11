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
import { useRouter } from "next/navigation";

type FormData = {
  additionalInfo?: string | undefined;
  cvLink?: string | undefined;
};

export default function Page5() {
  const { formData, updateFormData, resetFormData } = useFormContext();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: yupResolver(schema.pick([])),
    defaultValues: {
      additionalInfo: formData.additionalInfo,
      cvLink: formData.cvLink,
    },
  });

  const onSubmit = (data: FormData) => {
    updateFormData(data);
    console.log("Final form data:", formData);
    // Handle final submission (e.g., API call)
    resetFormData();
    router.push("/committee/application/thanks"); // Redirect to start or a success page
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-16">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Optional Information</CardTitle>
          <CardDescription>
            Provide any additional information or documents.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Is there anything else you’d like to share with us?
                      (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any additional details..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Attach your CV / Resume or academic bio (PDF or link,
                      Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://example.com/cv.pdf"
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
                  onClick={() => router.push("/committee/application/page4")}
                >
                  Previous
                </Button>
                <Button type="submit">Submit Application</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
