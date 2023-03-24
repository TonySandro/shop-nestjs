import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UniqueEmail } from '../validacao/email.validator';

export class AddUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @UniqueEmail({ message: 'Ja existe um usario com esse email' })
  email: string;

  @MinLength(6)
  password: string;
}
