"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { ApplyFormData } from "@/components/job/apply/types";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GetUserJobApplicationQuery } from "@/hasura/generated/graphql";

type SetFormData = (
  value: ApplyFormData | ((prevState: ApplyFormData) => ApplyFormData)
) => void;

type JobApplication = GetUserJobApplicationQuery["job_applications"][number];
type ExistingApplicationType = JobApplication | undefined;

interface Props {
  setFormData: SetFormData;
  setResumeFile: (file: File | null) => void;
  formData: ApplyFormData;
  existingApplication: ExistingApplicationType;
  applicationLoading: boolean;
}

export default function TabPersonal({
  formData,
  setFormData,
  setResumeFile,
  existingApplication,
  applicationLoading,
}: Props) {
  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personal_info: { ...prev.personal_info, [name]: value },
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
  };

  const handleCoverLetterChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, cover_letter: e.target.value }));
  };

  const handlePreferredContactChange = (
    value: "email" | "twitter" | "linkedin" | "telegram" | "discord"
  ) => {
    setFormData((prev) => ({
      ...prev,
      personal_info: { ...prev.personal_info, preferred_contact: value },
    }));
  };

  return (
    <TabsContent value="personal" className="space-y-4">
      <h1 className="text-xl font-bold">Personal Information</h1>
      <Card className="@container/card bg-gray-900 text-gray-100">
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.personal_info.name || ""}
              onChange={handlePersonalInfoChange}
              placeholder="Your name"
              required
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.personal_info.email || ""}
              onChange={handlePersonalInfoChange}
              placeholder="your.email@example.com"
              required
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country" className="text-gray-300">
              Country
            </Label>
            <Input
              id="country"
              name="country"
              value={formData.personal_info.country || ""}
              onChange={handlePersonalInfoChange}
              placeholder="United States"
              required
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Preferred Contact</Label>
            <RadioGroup
              value={formData.personal_info.preferred_contact || "email"}
              onValueChange={handlePreferredContactChange}
              disabled={applicationLoading}
              className="flex space-x-4"
            >
              {["email", "twitter", "linkedin", "telegram", "discord"].map(
                (option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option}
                      id={option}
                      className="text-blue-400"
                    />
                    <Label
                      htmlFor={option}
                      className="text-gray-300 capitalize cursor-pointer"
                    >
                      {option}
                    </Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitter" className="text-gray-300">
              Twitter (optional)
            </Label>
            <Input
              id="twitter"
              name="twitter"
              value={formData.personal_info.twitter || ""}
              onChange={handlePersonalInfoChange}
              placeholder="@yourhandle"
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin" className="text-gray-300">
              LinkedIn (optional)
            </Label>
            <Input
              id="linkedin"
              name="linkedin"
              value={formData.personal_info.linkedin || ""}
              onChange={handlePersonalInfoChange}
              placeholder="linkedin.com/in/yourprofile"
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telegram" className="text-gray-300">
              Telegram (optional)
            </Label>
            <Input
              id="telegram"
              name="telegram"
              value={formData.personal_info.telegram || ""}
              onChange={handlePersonalInfoChange}
              placeholder="@yourhandle"
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="discord" className="text-gray-300">
              Discord (optional)
            </Label>
            <Input
              id="discord"
              name="discord"
              value={formData.personal_info.discord || ""}
              onChange={handlePersonalInfoChange}
              placeholder="yourusername#1234"
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="affiliation" className="text-gray-300">
              Affiliation / Institution (if any)
            </Label>
            <Input
              id="affiliation"
              name="affiliation"
              value={formData.personal_info.affiliation || ""}
              onChange={handlePersonalInfoChange}
              placeholder="Your institution or organization"
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-300">
              Academic or Professional Title (if applicable)
            </Label>
            <Input
              id="title"
              name="title"
              value={formData.personal_info.title || ""}
              onChange={handlePersonalInfoChange}
              placeholder="e.g., Software Engineer, PhD"
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resume" className="text-gray-300">
              Resume
            </Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700"
            />
            {existingApplication?.resume_url && (
              <p className="text-sm text-gray-400">
                Current resume:{" "}
                <a
                  href={existingApplication.resume_url}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  View
                </a>
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cover_letter" className="text-gray-300">
              Cover Letter
            </Label>
            <Textarea
              id="cover_letter"
              name="cover_letter"
              value={formData.cover_letter || ""}
              onChange={handleCoverLetterChange}
              placeholder="Enter your cover letter"
              rows={5}
              disabled={applicationLoading}
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
            />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
