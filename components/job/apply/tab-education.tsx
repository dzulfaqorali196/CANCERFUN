"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
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

interface Education {
  degree: string;
  institution: string;
  year_completed: string;
  field_of_study: string;
}

export default function TabEducation({
  formData,
  setFormData,
  applicationLoading,
}: Props) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newEducation, setNewEducation] = useState<Education>({
    degree: "",
    institution: "",
    year_completed: "",
    field_of_study: "",
  });
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isEdit: boolean
  ) => {
    const { name, value } = e.target;
    if (isEdit && editIndex !== null) {
      setFormData((prev) => {
        const educations = [...prev.educations];
        educations[editIndex] = { ...educations[editIndex], [name]: value };
        return { ...prev, educations };
      });
    } else {
      setNewEducation((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      educations: [...prev.educations, { ...newEducation }],
    }));
    setNewEducation({
      degree: "",
      institution: "",
      year_completed: "",
      field_of_study: "",
    });
    setOpenCreate(false);
  };

  const updateEducation = () => {
    setOpenEdit(false);
    setEditIndex(null);
  };

  const removeEducation = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      educations: prev.educations.filter((_, i) => i !== index),
    }));
  };

  const openEditDialog = (index: number) => {
    setEditIndex(index);
    setOpenEdit(true);
  };

  return (
    <TabsContent value="education" className="space-y-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">List of Education</h1>
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
                  <DialogTitle>Add Education</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="degree">Degree</Label>
                    <Input
                      id="degree"
                      name="degree"
                      value={newEducation.degree}
                      onChange={(e) => handleInputChange(e, false)}
                      placeholder="e.g., Bachelor of Science"
                      disabled={applicationLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution</Label>
                    <Input
                      id="institution"
                      name="institution"
                      value={newEducation.institution}
                      onChange={(e) => handleInputChange(e, false)}
                      placeholder="e.g., University of Example"
                      disabled={applicationLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year_completed">Year Completed</Label>
                    <Input
                      id="year_completed"
                      name="year_completed"
                      type="number"
                      value={newEducation.year_completed}
                      onChange={(e) => handleInputChange(e, false)}
                      placeholder="e.g., 2020"
                      disabled={applicationLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="field_of_study">Field of Study</Label>
                    <Input
                      id="field_of_study"
                      name="field_of_study"
                      value={newEducation.field_of_study}
                      onChange={(e) => handleInputChange(e, false)}
                      placeholder="e.g., Computer Science"
                      disabled={applicationLoading}
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={addEducation}
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
                <TableHead>Degree</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Year Completed</TableHead>
                <TableHead>Field of Study</TableHead>
                {/* <TableHead className="py-3 text-right">
                  <Dialog open={openCreate} onOpenChange={setOpenCreate}>
                    <DialogTrigger asChild>
                      <Button type="button" disabled={applicationLoading}>
                        <FaRegSquarePlus />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Education</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="degree">Degree</Label>
                          <Input
                            id="degree"
                            name="degree"
                            value={newEducation.degree}
                            onChange={(e) => handleInputChange(e, false)}
                            placeholder="e.g., Bachelor of Science"
                            disabled={applicationLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="institution">Institution</Label>
                          <Input
                            id="institution"
                            name="institution"
                            value={newEducation.institution}
                            onChange={(e) => handleInputChange(e, false)}
                            placeholder="e.g., University of Example"
                            disabled={applicationLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="year_completed">Year Completed</Label>
                          <Input
                            id="year_completed"
                            name="year_completed"
                            type="number"
                            value={newEducation.year_completed}
                            onChange={(e) => handleInputChange(e, false)}
                            placeholder="e.g., 2020"
                            disabled={applicationLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="field_of_study">Field of Study</Label>
                          <Input
                            id="field_of_study"
                            name="field_of_study"
                            value={newEducation.field_of_study}
                            onChange={(e) => handleInputChange(e, false)}
                            placeholder="e.g., Computer Science"
                            disabled={applicationLoading}
                          />
                        </div>
                        <Button
                          type="button"
                          onClick={addEducation}
                          disabled={applicationLoading}
                        >
                          Save
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {formData.educations.map((edu, index) => (
                <TableRow key={index}>
                  <TableCell>{edu.degree}</TableCell>
                  <TableCell>{edu.institution}</TableCell>
                  <TableCell>{edu.year_completed}</TableCell>
                  <TableCell>{edu.field_of_study}</TableCell>
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
                          <DialogTitle>Edit Education</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor={`degree-${index}`}>Degree</Label>
                            <Input
                              id={`degree-${index}`}
                              name="degree"
                              value={edu.degree}
                              onChange={(e) => handleInputChange(e, true)}
                              placeholder="e.g., Bachelor of Science"
                              disabled={applicationLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`institution-${index}`}>
                              Institution
                            </Label>
                            <Input
                              id={`institution-${index}`}
                              name="institution"
                              value={edu.institution}
                              onChange={(e) => handleInputChange(e, true)}
                              placeholder="e.g., University of Example"
                              disabled={applicationLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`year_completed-${index}`}>
                              Year Completed
                            </Label>
                            <Input
                              id={`year_completed-${index}`}
                              name="year_completed"
                              type="number"
                              value={edu.year_completed}
                              onChange={(e) => handleInputChange(e, true)}
                              placeholder="e.g., 2020"
                              disabled={applicationLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`field_of_study-${index}`}>
                              Field of Study
                            </Label>
                            <Input
                              id={`field_of_study-${index}`}
                              name="field_of_study"
                              value={edu.field_of_study}
                              onChange={(e) => handleInputChange(e, true)}
                              placeholder="e.g., Computer Science"
                              disabled={applicationLoading}
                            />
                          </div>
                          <Button
                            type="button"
                            onClick={updateEducation}
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
                      onClick={() => removeEducation(index)}
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
