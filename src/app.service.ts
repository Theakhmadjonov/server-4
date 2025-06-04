import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(4);
    return 'Hello to server-4';
  }
}
