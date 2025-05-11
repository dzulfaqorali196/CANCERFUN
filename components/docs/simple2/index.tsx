"use client";

import { useState, useEffect } from "react";
import SectionOverview from "@/components/docs/simple2/overview";
import SectionTerms from "@/components/docs/simple2/terms";
import SectionToken from "@/components/docs/simple2/token";
import SectionDevelopers from "@/components/docs/simple2/developers";
import SectionPrograms from "@/components/docs/simple2/programs";
import SectionVesting from "@/components/docs/simple2/vesting";
import SectionLaunchpads from "@/components/docs/simple2/launchpads";
import SectionCommittee from "@/components/docs/simple2/committee";
import SectionResources from "@/components/docs/simple2/resources";

export default function SimpleDoc2() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview", component: <SectionOverview /> },
    { id: "terms", label: "Terms & Conditions", component: <SectionTerms /> },
    { id: "token", label: "$CANCER Token", component: <SectionToken /> },
    { id: "developers", label: "Developers", component: <SectionDevelopers /> },
    { id: "programs", label: "Programs", component: <SectionPrograms /> },
    { id: "vesting", label: "Vesting Program", component: <SectionVesting /> },
    {
      id: "launchpads",
      label: "Creation Launchpads",
      component: <SectionLaunchpads />,
    },
    {
      id: "committee",
      label: "Committee Member",
      component: <SectionCommittee />,
    },
    { id: "resources", label: "Resources", component: <SectionResources /> },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "overview";
      setActiveSection(hash);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-web3-dark">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <div className="sticky top-20 bg-web3-darker rounded-xl p-6 border border-web3-gray/50">
              <h2 className="text-xl font-semibold text-web3-light mb-4">
                Documentation
              </h2>
              <nav>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`block text-web3-light hover:text-web3-accent ${
                          activeSection === section.id
                            ? "font-semibold text-web3-accent"
                            : ""
                        }`}
                        onClick={() => setActiveSection(section.id)}
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
          <main className="lg:w-3/4">
            {
              sections.find((section) => section.id === activeSection)
                ?.component
            }
            {/* {sections.map((section) => (
              <div key={section.id}>{section.component}</div>
            ))} */}
          </main>
        </div>
      </div>
    </div>
  );
}
