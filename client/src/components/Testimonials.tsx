import { testimonials } from "@/lib/data";
import { Star, StarHalf, User } from "lucide-react";

export default function Testimonials() {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }
    
    return stars;
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/20 text-primary';
      case 'secondary':
        return 'bg-orange-500/20 text-orange-500';
      case 'accent':
        return 'bg-pink-500/20 text-pink-500';
      default:
        return 'bg-blue-500/20 text-blue-500';
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
          Was unsere Kunden sagen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className={`h-12 w-12 rounded-full overflow-hidden ${getColorClass(testimonial.color)} flex items-center justify-center`}>
                  <User className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
