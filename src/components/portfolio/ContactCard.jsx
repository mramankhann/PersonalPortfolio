import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ContactCard = () => {
  const contactInfo = [
    {
      label: "Location",
      value: "Bhopal, M.P",
      icon: MapPin,
      link: null,
      color: "text-muted-foreground"
    },
    {
      label: "Github",
      value: "mramankhann",
      icon: Github,
      link: "https://github.com/mramankhann",
      color: "text-primary hover:text-blue-400"
    },
    {
      label: "LinkedIn",
      value: "mohd aman",
      icon: Linkedin,
      link: "https://linkedin.com/in/mohd-aman",
      color: "text-primary hover:text-blue-400"
    },
    {
      label: "Email",
      value: "mohdaman2692@gmail.com",
      icon: Mail,
      link: "mailto:mohdaman2692@gmail.com",
      color: "text-primary hover:text-blue-400"
    }
  ];

  return (
    <Card className="p-6 bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
      <h2 className="text-xl font-bold text-center mb-1 text-foreground">Contact Me</h2>
      
      <div className="space-y-3">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <info.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{info.label}</span>
            </div>
            
            {info.link ? (
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm transition-colors duration-200 ${info.color}`}
              >
                {info.value}
              </a>
            ) : (
              <span className={`text-sm ${info.color}`}>
                {info.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};