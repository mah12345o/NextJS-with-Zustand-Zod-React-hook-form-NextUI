import { z } from "zod";

export const userFormSchema = z.object({
  email: z.string().email({ message: "email is required." }),
  category: z.string().min(1, { message: "select area type" }),
  builder_name: z.string().min(1, { message: "builder_name is required." }),
  building_name: z.string().min(1, { message: "building_name is required." }),
  Plot_Size: z.string().min(1, { message: "Plot_Size is required." }),
  group_name: z.string().min(1, { message: "group_name is required." }),
  whatspp_number: z.string().min(1, { message: "whatspp_number is required." }),
  total_unit: z.string().min(1, { message: "total_unit is required." }),
  contact_number: z
    .string()
    .min(10, { message: "minimum 10 digit " })
    .max(10, { message: "maximum  10 digit" }),
});
