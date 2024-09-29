import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthProvider {
  signUp() {
    return 'Hello from signUp';
  }
  signIn() {
    return 'Hello from signIn';
  }
}
