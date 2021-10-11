import { IsString, IsNotEmptyObject } from 'class-validator';
import { UserDetails } from '../entities';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsNotEmptyObject()
  details: UserDetails;
}
