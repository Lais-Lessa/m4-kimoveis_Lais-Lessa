import { z } from "zod";
import { CategorySchema } from "../schemas/category.schema";

type Category = z.infer<typeof CategorySchema>;

export { Category }