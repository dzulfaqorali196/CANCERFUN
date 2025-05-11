"use client";

import { useState } from "react";
import { useSessionUser } from "@/hooks/use-session-user";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

export default function UserProfile() {
  const { user, isLoading, isAuthenticated } = useSessionUser();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: "",
    language: "en",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle radio group changes
  const handleLanguageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, language: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate passwords match
      if (formData.newPassword !== formData.confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
      }

      // Simulate saving data to the server
      console.log("Saving profile data:", formData);

      // Call an API endpoint to save the updated profile
      const response = await fetch("/api/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while saving your profile.");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return (
      <div className="text-center">
        <p>You are not signed in.</p>
        <Button variant="link" className="mt-4">
          <a href="/auth/sign-in">Sign In</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="px-4 space-y-6 sm:px-6">
      <header className="space-y-2">
        <div className="flex items-center space-x-3">
          <Image
            src={user?.image || "/default-avatar.png"}
            alt="Avatar"
            width="96"
            height="96"
            className="rounded-full"
            style={{ aspectRatio: "96/96", objectFit: "cover" }}
          />
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">{user?.name || "Anonymous"}</h1>
            <Button size="sm">Change photo</Button>
          </div>
        </div>
      </header>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <Card>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="E.g. Jane Doe"
                defaultValue={user?.name as string}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="E.g. jane@example.com"
                defaultValue={user?.email as string}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label>Biography</Label>
              <Textarea
                id="bio"
                name="bio"
                placeholder="Enter your bio"
                className="mt-1"
                style={{ minHeight: "100px" }}
                onChange={handleInputChange}
              />
            </div>
          </CardContent>
        </Card>

        {/* Language Preferences Section */}
        <Card>
          <CardHeader>
            <div>Language</div>
            <div>Choose your preferred language</div>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={formData.language}
              onValueChange={handleLanguageChange}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="en" id="english" />
                <Label htmlFor="english">English</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fr" id="french" />
                <Label htmlFor="french">French</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="es" id="spanish" />
                <Label htmlFor="spanish">Spanish</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Change Password Section */}
        <Card>
          <CardHeader>
            <div>Change Password</div>
            <div>
              For your security, please do not share your password with others.
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                type="password"
                id="current-password"
                name="currentPassword"
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                type="password"
                id="new-password"
                name="newPassword"
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                onChange={handleInputChange}
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="pt-6">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}
