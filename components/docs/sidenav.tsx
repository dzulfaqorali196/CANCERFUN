"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { docTopics } from "@/data/docs";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface SideNavProps {
  cat: string;
  slug: string;
}

export default function SideNav({ cat, slug }: SideNavProps) {
  const defaultValue = [cat];

  return (
    <aside className="lg:w-1/4">
      <div className="sticky top-20 bg-web3-darker rounded-xl p-6 border border-web3-gray/50">
        <h2 className="text-xl font-semibold text-web3-light mb-4">
          Documentation
        </h2>
        <nav>
          <Accordion
            type="multiple"
            defaultValue={defaultValue}
            className="w-full"
          >
            {docTopics.map((section, index) => (
              <AccordionItem
                key={index}
                value={section.category}
                className="border-b-0"
              >
                <AccordionTrigger
                  className={cn(
                    "text-sm font-medium text-muted-foreground uppercase py-2 hover:no-underline",
                    cat === section.category && "text-web3-light"
                  )}
                >
                  <div className="flex items-center">
                    <section.icon className="h-4 w-4 mr-2" />
                    {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-2">
                  <ul className="space-y-1">
                    {section.subtopics.map((item, itemIndex) => {
                      const [, , itemCat, itemSlug] = item.url.split("/");
                      const isActive = cat === itemCat && slug === itemSlug;

                      return (
                        <li key={itemIndex}>
                          <Link
                            href={item.url}
                            className={cn(
                              "flex items-center text-sm p-2 rounded-md",
                              isActive
                                ? "bg-web3-primary/20 text-web3-light"
                                : "text-muted-foreground hover:bg-web3-gray/20 hover:text-web3-light"
                            )}
                          >
                            <ChevronRight className="h-4 w-4 mr-2" />
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
      </div>
    </aside>
  );
}
