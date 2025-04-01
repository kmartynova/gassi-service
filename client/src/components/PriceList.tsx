import { priceData } from "@/lib/data";

export default function PriceList() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8" id="prices">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Preisliste für den Gassi-Service VIER PFOTEN
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceData.map((price) => (
          <div 
            key={price.id}
            className="price-card bg-white border-2 border-primary/20 rounded-xl shadow-sm p-4"
          >
            <div className="mb-2 h-12 flex items-center">
              <h3 className="text-lg font-semibold text-gray-800">{price.title}</h3>
            </div>
            <div className="mb-4 flex items-end">
              <span className="text-3xl font-bold text-primary">{price.price}</span>
              {price.duration && (
                <span className="text-gray-500 ml-2">{price.duration}</span>
              )}
            </div>
            <div className="border-t border-gray-200 pt-4 text-sm text-gray-600">
              <p>{price.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
