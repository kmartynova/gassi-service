import { faqItems } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Häufig gestellte Fragen
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`} className="border rounded-lg p-2">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline px-2">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-2 pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
