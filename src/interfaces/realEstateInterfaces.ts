import { z } from "zod";
import realEstateSchema from "../schemas/realState.schema";

type RealEstate = z.infer<typeof realEstateSchema>;

export { RealEstate }