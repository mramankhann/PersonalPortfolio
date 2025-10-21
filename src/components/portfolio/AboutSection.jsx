import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Target } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative solutions to complex challenges",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative and communication-focused",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Delivering results that matter",
    },
  ];

  return (
    <div className="space-y-8 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-foreground">About Me</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start ">
        {/* About Text */}
        <Card className="p-8 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in w-full md:w-1/2">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in the MERN stack. As an MCA graduate, I bring both theoretical knowledge and practical experience to every project.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm eager to learn new technologies and contribute to innovative projects. Whether it's building scalable web applications or solving complex problems, I approach each challenge with enthusiasm and dedication.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently open to remote work opportunities and internships where I can grow professionally while making meaningful contributions to the team.
            </p>
          </div>
        </Card>

        {/* Highlights Cards */}
        <div className="flex flex-wrap gap-4 w-full md:w-1/2 justify-center">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="w-full sm:w-[calc(50%-0.5rem)] p-6 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in text-center group"
            >
              <item.icon className="w-8 h-5.5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
