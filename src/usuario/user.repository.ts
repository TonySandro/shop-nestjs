import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  private findUser(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new Error('User not exists');

    return user;
  }

  async salve(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async verifyEmail(email: string) {
    const user = this.users.find((user) => user.email === email);

    return user !== undefined;
  }

  async update(id: string, data: Partial<UserEntity>) {
    const user = this.findUser(id);

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async remove(id: string) {
    const user = this.findUser(id);

    this.users = this.users.filter((user) => user.id !== id);

    return user;
  }
}
