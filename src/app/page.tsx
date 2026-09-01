import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoleCarousel from "@/components/RoleCarousel";
import Tools from "@/components/Tools";
import Education from "@/components/Education";
import HowIWork from "@/components/HowIWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--paper)" }}>
      <Header />
      <Hero />
      <RoleCarousel />
      <Tools />
      <Education />
      <HowIWork />
      <Footer />
    </div>
  );
}
