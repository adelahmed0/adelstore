import { z as zod } from "zod";
import { insertProductSchema } from "@/lib/validators";

export type ProductType = zod.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
