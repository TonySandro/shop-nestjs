import { EmailValidator } from './validacao/email.validator';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepository, EmailValidator],
})
export class UserModule {}
