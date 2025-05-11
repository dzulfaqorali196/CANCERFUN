"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/schema";
import { useFormContext } from "@/components/FormContext";
import { Button } from "@/components/ui/button";
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
  motivation: string;
  perspectives: string;
  decentralization: string;
};

export default function Page3() {
  const { formData, updateFormData } = useFormContext();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: yupResolver(
      schema.pick(["motivation", "perspectives", "decentralization"])
    ),
    defaultValues: {
      motivation: formData.motivation,
      perspectives: formData.perspectives,
      decentralization: formData.decentralization,
    },
  });

  const onSubmit = (data: FormData) => {
    updateFormData(data);
    router.push("/committee/application/page4");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-16">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Motivation & Alignment</CardTitle>
          <CardDescription>
            Please share your motivations and perspectives.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Why do you want to join the CancerFun Committee? (max 250
                      words)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I am passionate about advancing cancer research..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="perspectives"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      What perspectives or skills do you bring that could
                      benefit the committee?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="My expertise in bioinformatics and collaborative skills..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="decentralization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      What does decentralization mean to you in the context of
                      science and biotech?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Decentralization enables open collaboration..."
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
                  onClick={() => router.push("/committee/application/page2")}
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
