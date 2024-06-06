import { z } from "zod";

export const userFormSchema = z.object({
  email: z
    .string()
    .email({ message: "email is required." })
    .refine((val) => /^[a-zA-Z0-9\s@.]*$/.test(val), {
      message: "Special characters are not allow.",
    }),
  category: z.string().min(1, { message: "select area type" }),
  builder_name: z
    .string()
    .min(1, { message: "builder_name is required." })
    .refine((val) => val.length <= 25, {
      message: "Builder name must 25 alphabet letter.",
    })
    .refine((value) => /^[a-zA-Z\s]+$/.test(value), {
      message: "Builder name must alphabet letter.",
    }),
  building_name: z
    .string()
    .min(1, { message: "building_name is required." })
    .refine((val) => val.length <= 35, {
      message: "building_name must 25 alphabet letter.",
    })
    .refine((value) => !/[^a-zA-Z0-9\s]/.test(value), {
      message: "building_name must alphabet letter & Number ",
    }),
  Plot_Size: z
    .number()
    .gte(10, { message: "Plot size must be at least 10." })
    .lte(100, { message: "Plot size must be at most 100." }),
  group_name: z.string().min(1, { message: "group_name is required." }),
  whatsapp_number: z
    .number()
    .min(1234567890, {
      message: "whatsapp_number must be at least 10 digit.",
    })
    .max(12345678910, {
      message: "contact_number max  10 digit.",
    }),
  total_unit: z
    .number()
    .gte(1, { message: "total_unit must be at least 1." })
    .lte(50, { message: "total_unit must be at most 50." }),
  contact_number: z
    .number()
    .min(1234567890, {
      message: "contact_number must be at least 10 digit.",
    })
    .max(12345678910, {
      message: "contact_number max  10 digit.",
    }),

  Price_range: z
    .array(z.number())
    .min(10, { message: "Price range must have two values." })
    .max(99, { message: "Price range must have two values." })
    .refine((val) => val[0] <= val[1], { message: "Invalid price range." }),
});
