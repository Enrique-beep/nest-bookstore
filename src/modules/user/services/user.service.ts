import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities';
import { UserRepository } from '../repositories';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  public findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  public create(dto: any) {
    return 'creating a user';
  }

  public update(id: number, dto: any) {
    return 'updating a user';
  }

  public delete(id: number) {
    return 'deleting a user';
  }
}
