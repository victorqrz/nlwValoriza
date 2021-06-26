import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepositores extends Repository<Compliment> {}

export { ComplimentsRepositores };
