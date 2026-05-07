import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 pt-6 pb-8 sm:pt-12 sm:pb-12 space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center w-fit gap-3 text-md font-semibold text-muted-foreground cursor-pointer hover:text-foreground duration-200"
      >
        <ChevronLeft size={20} strokeWidth={2.25} /> Back to Home
      </button>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">All Projects</h1>
        <p className="text-muted-foreground font-light text-lg">
          A collection of my recent work, side projects, and experiments. Built from scratch with a focus on clean code and great user experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
