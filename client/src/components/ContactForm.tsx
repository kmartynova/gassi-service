import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactFormResolver, serviceOptions } from "@/lib/validation";
import { ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: contactFormResolver,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dogName: "",
      dogBreed: "",
      service: "",
      message: ""
    }
  });
  
  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Erfolgreich gesendet!",
        description: "Wir werden uns in Kürze bei Ihnen melden.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Fehler beim Senden",
        description: error.message || "Ein unerwarteter Fehler ist aufgetreten.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = async (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8" id="contact">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontaktieren Sie uns</h2>
      <p className="text-gray-600 mb-6">
        Füllen Sie das Formular aus, um Ihren Hund für unseren Gassi-Service anzumelden.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Ihr Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail*</FormLabel>
                <FormControl>
                  <Input placeholder="ihre.email@beispiel.de" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input placeholder="Ihre Telefonnummer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="dogName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name des Hundes*</FormLabel>
                <FormControl>
                  <Input placeholder="Name Ihres Hundes" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="dogBreed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hunderasse</FormLabel>
                <FormControl>
                  <Input placeholder="Rasse Ihres Hundes" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gewünschter Service*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bitte wählen Sie" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nachricht</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Ihre Nachricht an uns" 
                    className="min-h-[80px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Wird gesendet..." : "Anfrage senden"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
