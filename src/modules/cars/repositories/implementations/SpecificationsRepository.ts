import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ICreateSpeccificationDTO,
  ISpecificationRepository,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });
    return specification;
  }

  async create({ name, description }: ICreateSpeccificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });
    await this.repository.save(specification);
  }
}

export { SpecificationRepository };
