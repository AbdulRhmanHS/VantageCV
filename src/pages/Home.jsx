import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Content from "../components/Home/Content";
import FinalCTA from "../components/Home/FinalCTA";

export default function Home() {
  return (
    <main className="w-full pt-16">
      <Hero />
      <Features />
      <Content />
      <FinalCTA />
    </main>
  );
}
