import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';

describe('LoginController', () => {
  let controller: LoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
    }).compile();

    controller = module.get<LoginController>(LoginController);
  })
  });


