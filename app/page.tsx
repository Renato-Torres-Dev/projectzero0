import { HorizontalDividerSection } from "./components/divider/horizontal copy";
import { AboutUs } from "./components/pages/home/about-us";
import { Contract } from "./components/pages/home/contract";
import { HeroSection } from "./components/pages/home/hero-section";
import { HighLightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/know-techs";
import { Produtos } from "./components/pages/home/services";
import { WorkExperience } from "./components/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <HorizontalDividerSection />
      <AboutUs />
      <HorizontalDividerSection />
      <Produtos />
      <HorizontalDividerSection />
      <Contract />
      <HorizontalDividerSection />
      {/*<KnowTechs />
      <HighLightedProjects />
      <WorkExperience />*/}
    </>
  )
}
