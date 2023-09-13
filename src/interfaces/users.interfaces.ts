import { z } from "zod";
import { UserSchema } from "../schemas/users.schema";
import { DeepPartial } from "typeorm";
import { User } from "../entities";

type UserRepo = z.infer<typeof UserSchema>;
type UserRead = Array<User>
type UserUpdate = DeepPartial<User>

export { UserRepo,UserRead,UserUpdate }