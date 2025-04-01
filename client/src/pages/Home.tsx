import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ServiceDescription from "@/components/ServiceDescription";
import PriceList from "@/components/PriceList";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-pattern text-gray-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row">
          {/* Contact Form Section */}
          <div className="md:w-5/12 lg:w-4/12 mb-8 md:mb-0 md:pr-6">
            <ContactForm />
          </div>
          
          {/* Content Section */}
          <div className="md:w-7/12 lg:w-8/12">
            <ServiceDescription />
            <PriceList />
          </div>
        </div>
      </div>
      
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
