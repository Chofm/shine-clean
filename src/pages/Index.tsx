import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import WhyUs from "@/components/WhyUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
      import ProjectGallery from "../components/ProjectGallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <ProjectGallery />
      <WhyUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
