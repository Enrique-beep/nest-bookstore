import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User } from '../entities';
import { UserRepository } from '../repositories';
import { CreateUserDto, ReadUserDto, UpdateUserDto } from '../dtos';
import { Status } from '../../../shared';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public async findAll(): Promise<ReadUserDto[]> {
    const users: User[] = await this.userRepository.find({
      where: { status: Status.ACTIVE },
    });

    return users.map((user) => plainToClass(ReadUserDto, user));
  }

  public async findOne(id: number): Promise<ReadUserDto> {
    const user: User = await this.findById(id);

    return plainToClass(ReadUserDto, user);
  }

  public async create(dto: CreateUserDto): Promise<ReadUserDto> {
    const newUser: User = this.userRepository.create(dto);
    await newUser.save();
    return plainToClass(ReadUserDto, newUser);
  }

  public async update(id: number, dto: UpdateUserDto): Promise<ReadUserDto> {
    const userFound: User = await this.findById(id);

    const updatedUser = this.userRepository.merge(userFound, dto);
    await updatedUser.save();
    return plainToClass(ReadUserDto, updatedUser);
  }

  public async delete(id: number) {
    await this.findById(id);

    return await this.userRepository.update(id, { status: Status.INACTIVE });
  }

  private async findById(id: number) {
    const userFound: User = await this.userRepository.findOne(id, {
      where: { status: Status.ACTIVE },
    });

    if (!userFound) throw new NotFoundException();

    return userFound;
  }
}
