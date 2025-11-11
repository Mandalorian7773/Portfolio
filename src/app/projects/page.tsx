"use client";

import Link from "next/link";
import { projectsData } from "@/lib/projectsData";

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-7xl py-8 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="bg-card rounded-3xl p-6 border border-border flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-3 text-white">{project.name}</h2>
            <p className="text-muted-foreground mb-4 flex-grow">{project.shortDescription}</p>
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 text-white">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>
            <Link 
              href={`/projects/${project.id}`}
              className="mt-auto inline-block w-full text-center py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}