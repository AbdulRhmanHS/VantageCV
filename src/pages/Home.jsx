import "/src/components/Home/Home.css";
import Hero from "/src/components/Home/Hero";
import Features from "/src/components/Home/Features";
import Content from "/src/components/Home/Content";
import FinalCTA from "/src/components/Home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content />
      <FinalCTA />
    </>
  );
}
