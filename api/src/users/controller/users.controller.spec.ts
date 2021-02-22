import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../services';
import { UserController } from './users.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();
  });

  describe('getUsers', () => {
    it('should return array of  users', () => {
      const appController = app.get<UserController>(UserController);
      expect(appController.users()).toBe([]);
    });
  });
});
