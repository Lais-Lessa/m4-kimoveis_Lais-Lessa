import { z } from "zod";
import { AddressSchema } from "../schemas/address.schema";

type Address = z.infer<typeof AddressSchema>;

export { Address }