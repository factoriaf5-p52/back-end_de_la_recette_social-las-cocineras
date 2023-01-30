<<<<<<< HEAD


import { Body, Controller, Post } from '@nestjs/common';
=======
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
>>>>>>> e979e92fad53d6f32161820dd395f79b4c10107b
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';

@Controller()
export class LoginController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: any) {
    return this.authService.login(user);
  }
}