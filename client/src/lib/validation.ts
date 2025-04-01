import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormValidationSchema } from "@shared/schema";

export const contactFormResolver = zodResolver(contactFormValidationSchema);

export const serviceOptions = [
  { value: "30min", label: "30-minütiger Spaziergang" },
  { value: "60min", label: "60-minütiger Spaziergang" },
  { value: "puppy", label: "Welpen-Spaziergang" },
  { value: "evening", label: "Abendlicher Spaziergang" },
  { value: "custom", label: "Individueller Spaziergang" },
  { value: "group", label: "Gruppenspaziergang" },
  { value: "weekend", label: "Wochenend Spaziergang" },
  { value: "senior", label: "Senioren-Spaziergang" },
  { value: "twice", label: "Zweimal täglicher Spaziergang" },
  { value: "transport", label: "Transport zum Tierarzt/Hundefriseur" },
  { value: "daycare", label: "Hundetagesbetreuung" },
  { value: "monthly", label: "Monatskarte" }
];
