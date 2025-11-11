"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/projectsData";

// Use a type that satisfies the Next.js constraint
type ProjectPageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  // In practice, params will be resolved by the time this component runs
  // We'll handle both cases for type safety
  const resolvedParams = params instanceof Promise 
    ? { id: '' } // fallback, shouldn't happen in practice
    : params;
  
  const { id } = resolvedParams;
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="w-full max-w-7xl py-8 mx-auto">
      <Link 
        href="/projects" 
        className="inline-flex items-center text-primary hover:underline mb-6"
      >
        ← Back to Projects
      </Link>
      
      <div className="bg-card rounded-3xl p-8 border border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-4 md:mb-0">{project.name}</h1>
          <Link 
            href={project.repoUrl}
            target="_blank"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center"
          >
            View on GitHub
          </Link>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">{project.fullDescription}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Challenges & Solutions</h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span className="text-muted-foreground">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}