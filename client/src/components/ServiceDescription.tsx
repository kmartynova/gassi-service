import { 
  Heart, 
  PawPrint, 
  BabyIcon, 
  Home, 
  Users, 
  PersonStanding
} from "lucide-react";
import { BlobContainer } from "@/components/ui/blob-container";
import { services } from "@/lib/data";

export default function ServiceDescription() {
  // Map of icon names to Lucide components
  const iconMap: Record<string, React.ReactNode> = {
    walking: <PersonStanding className="h-6 w-6" />,
    users: <Users className="h-6 w-6" />,
    baby: <BabyIcon className="h-6 w-6" />,
    home: <Home className="h-6 w-6" />
  };

  // Use these dog image URLs if needed
  const dogImages = [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1601758124316-e7372062b29e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">GASSI-SERVICE</h1>
        <p className="text-xl text-gray-700 mb-6">
          Vertrauen Sie Ihrem vierbeinigen Freund unserem Service "Vier Pfoten" an! 🐾💖
        </p>

        {/* Blobs with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative">
            <BlobContainer 
              variant="primary" 
              className="w-full aspect-[4/3]"
            >
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80" 
                alt="Hundebetreuung" 
                className="w-full h-full object-cover"
              />
            </BlobContainer>
            <div className="absolute -bottom-4 -right-4 blob-alt bg-pink-500/20 w-16 h-16 flex items-center justify-center">
              <Heart className="text-pink-500 h-6 w-6" />
            </div>
          </div>

          <div className="relative">
            <BlobContainer 
              variant="secondary" 
              type="blob-alt"
              className="w-full aspect-[4/3]"
            >
              <img 
                src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80" 
                alt="Glücklicher Hund" 
                className="w-full h-full object-cover"
              />
            </BlobContainer>
            <div className="absolute -top-4 -left-4 blob bg-primary/20 w-16 h-16 flex items-center justify-center">
              <PawPrint className="text-primary h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Wir bieten professionellen Gassi-Service für Ihren Hund an! Unser erfahrenes Team kümmert sich liebevoll um Ihren vierbeinigen Freund, während Sie bei der Arbeit sind oder andere Verpflichtungen haben.
          </p>
          <p className="text-gray-700 mb-4">
            Unsere Spaziergänge finden in den schönsten Grünanlagen Berlins statt, damit Ihr Hund genügend Auslauf und Abwechslung bekommt.
          </p>
        </div>
      </div>

      {/* Services Description */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8" id="services">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Unsere Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div className="flex" key={service.id}>
              <div className={`flex-shrink-0 h-12 w-12 bg-${service.color === 'button' ? 'blue-500' : service.color}/20 rounded-full flex items-center justify-center`}>
                {iconMap[service.icon]}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-1 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
