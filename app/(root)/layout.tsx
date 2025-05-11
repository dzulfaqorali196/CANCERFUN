import type React from "react";

import MouseMoveEffect from "@/components/mouse-move-effect";
// import { FormProvider } from "@/components/committee/application/form-context";
import { FormProvider } from "@/components/FormContext";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FormProvider>
      <main className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        <MouseMoveEffect />
      </main>
    </FormProvider>
  );
}
