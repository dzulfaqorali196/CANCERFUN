"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApplyFormData } from "@/components/job/apply/types";
import {
  FaRegSquarePlus,
  FaPenToSquare,
  FaTrashCan,
  FaMagnifyingGlass,
} from "react-icons/fa6";

type SetFormData = (
  value: ApplyFormData | ((prevState: ApplyFormData) => ApplyFormData)
) => void;

interface Props {
  formData: ApplyFormData;
  setFormData: SetFormData;
  applicationLoading: boolean;
}

interface Experience {
  job_title: string;
  institution_name: string;
  start_date: string;
  end_date: string;
  responsibilities: string;
  achievements: string;
}

export default function TabExperience({
  formData,
  setFormData,
  applicationLoading,
}: Props) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newExperience, setNewExperience] = useState<Experience>({
    job_title: "",
    institution_name: "",
    start_date: "",
    end_date: "",
    responsibilities: "",
    achievements: "",
  });
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    isEdit: boolean
  ) => {
    const { name, value } = e.target;
    if (isEdit && editIndex !== null) {
      setFormData((prev) => {
        const experiences = [...prev.experiences];
        experiences[editIndex] = { ...experiences[editIndex], [name]: value };
        return { ...prev, experiences };
      });
    } else {
      setNewExperience((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, { ...newExperience }],
    }));
    setNewExperience({
      job_title: "",
      institution_name: "",
      start_date: "",
      end_date: "",
      responsibilities: "",
      achievements: "",
    });
    setOpenCreate(false);
  };

  const updateExperience = () => {
    setOpenEdit(false);
    setEditIndex(null);
  };

  const removeExperience = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  const openEditDialog = (index: number) => {
    setEditIndex(index);
    setOpenEdit(true);
  };

  return (
    <TabsContent value="experience" className="space-y-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">List of Work Experience</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md bg-white px-10 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-500"
              />
            </div>
            <Dialog open={openCreate} onOpenChange={setOpenCreate}>
              <DialogTrigger asChild>
                <Button type="button" disabled={applicationLoading}>
                  <FaRegSquarePlus />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Experience</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="job_title">Job Title</Label>
                    <Input
                      id="job_title"
                      name="job_title"
                      value={newExperience.job_title}
                      onChange={(e) => handleInputChange(e, false)}
                      placeholder="e.g., Software Engineer"
                      disabled={applicationLoading}
                    />
                  </div>
                  <div>
                    <Label htmlFor="institution_name">Company</Label>
                    <Input
                      id="institution_name"
                      name="institution_name"
                      value={newExperience.institution_name}
                      onChange={(e) => handleInputChange(e, false)}
                      placeholder="e.g., Tech Corp"
                      disabled={applicationLoading}
                    />
                  </div>
                  <div>
                    <Label htmlFor="start_date">Start Date</Label>
                    <Input
                      id="start_date"
                      name="start_date"
                      type="date"
                      value={newExperience.start_date}
                      onChange={(e) => handleInputChange(e, false)}
                      disabled={applicationLoading}
                    />
                  </div>
                  <div>
                    <Label htmlFor="end_date">End Date</Label>
                    <Input
                      id="end_date"
                      name="end_date"
                      type="date"
                      value={newExperience.end_date}
                      onChange={(e) => handleInputChange(e, false)}
                      disabled={applicationLoading}
                    />
                  </div>
                  <div>
                    <Label htmlFor="responsibilities">Responsibilities</Label>
                    <Textarea
                      id="responsibilities"
                      name="responsibilities"
                      value={newExperience.responsibilities}
                      onChange={(e) => handleInputChange(e, false)}
                      placeholder="Describe your responsibilities"
                      disabled={applicationLoading}
                    />
                  </div>
                  <div>
                    <Label htmlFor="achievements">Achievements</Label>
                    <Textarea
                      id="achievements"
                      name="achievements"
                      value={newExperience.achievements}
                      onChange={(e) => handleInputChange(e, false)}
                      placeholder="List your achievements"
                      disabled={applicationLoading}
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={addExperience}
                    disabled={applicationLoading}
                  >
                    Save
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                {/* 
                <TableHead>Responsibilities</TableHead>
                <TableHead>Achievements</TableHead> 
                */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {formData.experiences.map((exp, index) => (
                <TableRow key={index}>
                  <TableCell>{exp.job_title}</TableCell>
                  <TableCell>{exp.institution_name}</TableCell>
                  <TableCell>{exp.start_date}</TableCell>
                  <TableCell>{exp.end_date}</TableCell>
                  {/* 
                  <TableCell>{exp.responsibilities}</TableCell>
                  <TableCell>{exp.achievements}</TableCell> 
                  */}
                  <TableCell className="flex justify-end items-center space-x-2">
                    <Dialog
                      open={openEdit && editIndex === index}
                      onOpenChange={(open) => {
                        if (!open) setEditIndex(null);
                        setOpenEdit(open);
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => openEditDialog(index)}
                          disabled={applicationLoading}
                        >
                          <FaPenToSquare />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Experience</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor={`job_title-${index}`}>
                              Job Title
                            </Label>
                            <Input
                              id={`job_title-${index}`}
                              name="job_title"
                              value={exp.job_title}
                              onChange={(e) => handleInputChange(e, true)}
                              placeholder="e.g., Software Engineer"
                              disabled={applicationLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`institution_name-${index}`}>
                              Company
                            </Label>
                            <Input
                              id={`institution_name-${index}`}
                              name="institution_name"
                              value={exp.institution_name}
                              onChange={(e) => handleInputChange(e, true)}
                              placeholder="e.g., Tech Corp"
                              disabled={applicationLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`start_date-${index}`}>
                              Start Date
                            </Label>
                            <Input
                              id={`start_date-${index}`}
                              name="start_date"
                              type="date"
                              value={exp.start_date}
                              onChange={(e) => handleInputChange(e, true)}
                              disabled={applicationLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`end_date-${index}`}>
                              End Date
                            </Label>
                            <Input
                              id={`end_date-${index}`}
                              name="end_date"
                              type="date"
                              value={exp.end_date}
                              onChange={(e) => handleInputChange(e, true)}
                              disabled={applicationLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`responsibilities-${index}`}>
                              Responsibilities
                            </Label>
                            <Textarea
                              id={`responsibilities-${index}`}
                              name="responsibilities"
                              value={exp.responsibilities}
                              onChange={(e) => handleInputChange(e, true)}
                              placeholder="Describe your responsibilities"
                              disabled={applicationLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`achievements-${index}`}>
                              Achievements
                            </Label>
                            <Textarea
                              id={`achievements-${index}`}
                              name="achievements"
                              value={exp.achievements}
                              onChange={(e) => handleInputChange(e, true)}
                              placeholder="List your achievements"
                              disabled={applicationLoading}
                            />
                          </div>
                          <Button
                            type="button"
                            onClick={updateExperience}
                            disabled={applicationLoading}
                          >
                            Save
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => removeExperience(index)}
                      disabled={applicationLoading}
                    >
                      <FaTrashCan />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TabsContent>
  );
}
