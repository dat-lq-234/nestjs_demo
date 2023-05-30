import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UsersService {
  private fakeData = [
    { id: 1, username: 'azir', email: 'azir@gmail.com' },
    { id: 2, username: 'nasus', email: 'nasus@gmail.com' },
  ];
  getAll() {
    return this.fakeData;
  }
  createUser(userData: CreateUserDto) {
    const userDataInsert = { id: this.fakeData.length + 1, ...userData };
    this.fakeData.push(userDataInsert);
    return;
  }

  getUserById(id: number) {
    return { id, username: 'azir', email: 'azir@gmail.com' };
  }
}
