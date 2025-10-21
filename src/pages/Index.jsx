import { ContactCard } from "../components/portfolio/ContactCard";
import { EducationCard } from "../components/portfolio/EducationCard";
import ProfileCard from "../components/portfolio/ProfileCard";
import { TechSkills } from "../components/portfolio/TechSkills";
import {AboutSection} from "../components/portfolio/AboutSection"
import { ProjectsSection } from "../components/portfolio/ProjectsSection";
import { Services } from "../components/portfolio/Services";
import { Footer } from "../components/portfolio/Footer";



const Index = () => {

  return (
      <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8 space-y-12">
        <div className="flex flex-col lg:flex-row flex-wrap gap-6">
          <div className="lg:w-2/3 w-full">
            <ProfileCard />
          </div>
          <div className="flex gap-4 flex-col">
            <ContactCard/>
            <EducationCard/>
          </div>
          <section className="w-full ">
            <TechSkills/>
          </section>
           <section className="w-full">
          <AboutSection/>
        </section>
        <section className='w-full'>
          <ProjectsSection/>
        </section>

        <section >
          <Services/>
        </section>

<section className="w-full">
  <Footer/>
</section>
      </div>
    </div>
    </div>

  );
};

export default Index