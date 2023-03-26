import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAll() {
    return [
      {
        id: 1,
        name: 'User User1',
        username: 'user-1',
        role: 'admin',
      },
      {
        id: 2,
        name: 'User User2',
        username: 'user-2',
        role: 'manager',
      },
      {
        id: 3,
        name: 'User User3',
        username: 'user-3',
        role: 'manager',
      },
      {
        id: 4,
        name: 'User User4',
        username: 'user-4',
        role: 'user',
      },
    ];
  }

  get(id: number) {
    return this.getAll().find((user) => user.id === id);
  }
}
