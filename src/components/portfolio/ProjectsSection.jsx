import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "the BookGallery App",
      description: "theBookGallery is an online platform that allows users to register, upload, and manage their personal book.",
      technologies: ["React","Tailwind CSS", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://thebookgallery.vercel.app/",
      githubUrl: "https://github.com/mramankhann/theBookGallery",
      image: "/project/thebookgallery.png"
    },
    {
      title: "FocusFlow with auth",
      description: "A full-stack Todo App with user authentication using JWT, secure login/logout, private user-specific todos",
      technologies: ["React","Tailwind CSS", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://focus-flow-woad-kappa.vercel.app/",
      githubUrl: "https://github.com/mramankhann/FocusFlow_with_Auth",
      image: "/project/focusflow.png"
    },
    {
      title: "Employee Management System",
      description: "This project is designed to help admins effortlessly manage employee data",
      technologies: ["React","Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/mramankhann/Employee-Management-System",
      image: "/project/ems.png"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-foreground">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                 <a href={project.liveUrl} target="__blank">Live Demo</a> 
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                     <a href={project.githubUrl} target="__blank">Github Code</a> 
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}