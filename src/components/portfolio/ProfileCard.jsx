import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profilePic from "/formal.jpeg";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <Card className="p-8 bg-white shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
      <div className="text-center space-y-6">
        <div className="relative mx-auto w-35 h-35 ">
          <img
            src={profilePic}
            alt="Mohd Aman"
            className="w-full h-full bg-cover bg-center rounded-full border-4 border-primary/20 shadow-glow"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
        </div>

        <h1 className="text-3xl font-bold text-foreground">Mohd Aman</h1>

        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          Full Stack Developer (MERN) || MCA Graduate || Open to Remote Work /
          Internship || Eager to Build & Learn || Quick Learner || Freelancer ||
          Building Real Projects
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button
            className="bg-gradient-primary text-gray-500 border-gray-300 hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            size="lg"
            variant="outline"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          {/* CTA Button */}
          <div className="text-center">
            <Button
              className="bg-blackhover:shadow-glow transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <Link to={"/form"}> Let's Connect</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
