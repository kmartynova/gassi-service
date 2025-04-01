import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Vier Pfoten Gassi-Service</h2>
            <p className="text-gray-300 max-w-xs">
              Professioneller Hundeservice in Berlin. Wir sind für Sie und Ihren vierbeinigen Freund da!
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Mustergasse 123, 10115 Berlin</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+49 30 1234567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@vier-pfoten-service.de</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white text-xl">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-xl">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-xl">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vier Pfoten Gassi-Service. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
