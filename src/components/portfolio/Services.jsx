import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Smartphone, Database, Palette, Globe, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Complete web applications using MERN stack with modern best practices and scalable architecture.",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first, responsive websites that work seamlessly across all devices and screen sizes.",
      technologies: ["Tailwind CSS", "Bootstrap", "CSS Grid", "Flexbox"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust APIs and database design with secure authentication and efficient data management.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"]
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Converting designs into pixel-perfect, interactive user interfaces with smooth animations.",
      technologies: ["React", "CSS", "Framer Motion", "GSAP"]
    },
    {
      icon: Globe,
      title: "Web Optimization",
      description: "Performance optimization, SEO implementation, and deployment strategies for better user experience.",
      technologies: ["Webpack", "Vite", "SEO", "Performance"]
    },
    {
      icon: Zap,
      title: "Quick Prototyping",
      description: "Rapid development of MVPs and prototypes to validate ideas and gather user feedback quickly.",
      technologies: ["React", "Next.js", "Vercel", "Firebase"]
    }
  ];

  return (
    <div className="space-y-8 px-4 md:px-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">What I Do</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I offer comprehensive web development services to help bring your ideas to life with modern technologies and best practices.
        </p>
      </div>

      {/* Flex Layout for Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <Card
            key={index}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] p-6 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{service.title}</h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
