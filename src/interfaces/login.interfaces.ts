import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

type loginSchema = z.infer<typeof loginSchema>;

export default {loginSchema}