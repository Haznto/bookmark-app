import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthProvider } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthProvider],
}) // A Decorator is only a function that adds metadata to the wrapped class/function.
export class AuthModule {}
