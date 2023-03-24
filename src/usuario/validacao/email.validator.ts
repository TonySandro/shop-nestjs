import { Injectable } from '@nestjs/common/decorators';
import { UserRepository } from './../user.repository';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const userComEmailExiste = await this.userRepository.verifyEmail(value);

    return !userComEmailExiste;
  }
}

export const UniqueEmail = (validationsOptions: ValidationOptions) => {
  return (object: Object, prop: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: prop,
      options: validationsOptions,
      constraints: [],
      validator: EmailValidator,
    });
  };
};
