import { getRepository } from "typeorm";
import { User } from "../entity/User";

export class UserController {
    repository = getRepository(User);
}