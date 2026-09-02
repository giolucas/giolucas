import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoleCarousel from "@/components/RoleCarousel";
import Specialties from "@/components/Specialties";
import Tools from "@/components/Tools";
import Education from "@/components/Education";
import Quote from "@/components/Quote";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "var(--paper)", color: "var(--text-body)", minHeight: "100vh", overflowX: "hidden" }}>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,40px)" }}>
        <Hero />
        <RoleCarousel />
        <Specialties />
        <Tools />
        <Education />
        <Quote />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
