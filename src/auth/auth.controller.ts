import { Controller, Post } from '@nestjs/common';
import { AuthProvider } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authProvider: AuthProvider) {}
  @Post('signup')
  signup() {
    return this.authProvider.signUp();
  }
  @Post('signin')
  signin() {
    return this.authProvider.signIn();
  }
}
