import { Card } from "@/components/ui/card";
import Marquee from "react-fast-marquee";


export const TechSkills = () => {
  const skill = [
    {
      img: "/react.svg",
    },
    {
      img: "/icons/nodejs.png",
    },
    {
      img: "/icons/mongodb.png",
    },
    {
      img: "/icons/tailwind.png",
    },
    {
      img: "/icons/vite.png",
    },
    {
      img: "/icons/css.png",
    },
    {
      img: "/icons/html.png",
    },
    {
      img: "/icons/js.png",
    },
    {
      img: "/icons/python.png",
    },
  

  ];

  return (
    <div className="mt-6 space-y-10 w-full">
      <h2 className="text-3xl font-bold text-center text-foreground">Tech Skills</h2>

      <Marquee pauseOnHover speed={100}>

        <div className=" flex gap-1 items-center text-center justify-center">
          {skill.map((tech, index) => (
            <Card
              key={index}
              className="p-4 bg-gradient-card border-none shadow-none hover:shadow-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in  cursor-pointer">
              <div className="text-center place-items-center">
                <div className="h-30 w-40 items-center"><img className="h-20" src={tech.img} /></div>
              </div>
            </Card>
          ))}
        </div>
      </Marquee>
    </div>
  );
};