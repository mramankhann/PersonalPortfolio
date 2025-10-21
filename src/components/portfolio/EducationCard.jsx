import { School  } from "lucide-react";
import { Card } from "@/components/ui/card";

export const EducationCard = () => {
  const contactInfo = [
    {
      label: "MCA",
      value: "SIRT BHOPAL",
      icon: School ,
      color: "text-muted-foreground"
    },
    {
      label: "BSC",
      value: "CSJM UNIVERSITY",
      icon: School ,
    color: "text-muted-foreground"
    },
    {
      label: "HIGHER SECONDARY",
      value: "PATEL COLLEGE",
      icon: School ,
      color: "text-muted-foreground"
    }
  ];

  return (
    <Card className="p-6 bg-white shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
      <h2 className="text-xl font-bold text-center mb-1 text-foreground">Higher Education</h2>
      
      <div className="space-y-2">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center justify-between group gap-9">
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