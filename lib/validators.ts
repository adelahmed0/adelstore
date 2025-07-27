import { z as zod } from "zod";
import { formatNumberWithDecimal } from "@/lib/utils";

const currency = zod
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must be a valid number with up to two decimal places",
  );

// Schema for inserting products
export const insertProductSchema = zod.object({
  name: zod.string().min(3, "Product name must be at least 3 characters long"),
  slug: zod.string().min(3, "Product slug must be at least 3 characters long"),
  category: zod.string().min(3, "Category must be at least 3 characters long"),
  brand: zod.string().min(3, "Brand must be at least 3 characters long"),
  description: zod.string().min(3, "Description must be at least 3 characters long"),
  stock: zod.coerce.number(),
  images: zod.array(zod.string()).min(1, "At least one image is required"),
  isFeatured: zod.boolean(),
  banner: zod.string().nullable(),
  price: currency,
});
