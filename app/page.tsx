import { AboutUs } from "./components/pages/home/about-us";
import { HeroSection } from "./components/pages/home/hero-section";
import { HighLightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/know-techs";
import { Produtos } from "./components/pages/home/services";
import { WorkExperience } from "./components/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Produtos />
      {/*<KnowTechs />
      <HighLightedProjects />
      <WorkExperience />*/}
    </>
  )
}
