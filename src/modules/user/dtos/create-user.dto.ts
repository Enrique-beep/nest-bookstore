import { IsNumber, IsString, IsNotEmptyObject } from 'class-validator';
import { UserDetails } from '../entities';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsNotEmptyObject()
  details: UserDetails;
}
