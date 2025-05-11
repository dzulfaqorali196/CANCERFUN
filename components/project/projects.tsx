import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="h-full">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl">Total Projects</CardTitle>
          <CardDescription className="text-sm md:text-base">Number of projects in progress</CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
          <p className="text-xl md:text-2xl font-bold">12</p>
        </CardContent>
      </Card>
      
      <Card className="h-full">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl">Completed</CardTitle>
          <CardDescription className="text-sm md:text-base">Successfully completed projects</CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
          <p className="text-xl md:text-2xl font-bold">8</p>
        </CardContent>
      </Card>
      
      <Card className="h-full">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl">In Progress</CardTitle>
          <CardDescription className="text-sm md:text-base">Currently active projects</CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
          <p className="text-xl md:text-2xl font-bold">3</p>
        </CardContent>
      </Card>
      
      <Card className="h-full">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl">On Hold</CardTitle>
          <CardDescription className="text-sm md:text-base">Temporarily paused projects</CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
          <p className="text-xl md:text-2xl font-bold">1</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects; 