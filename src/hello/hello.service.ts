import { Injectable } from '@nestjs/common';
import { SayHelloRequest, SayHelloResponse } from '../proto/hello/v1/hello_pb';

@Injectable()
export class HelloService {
  sayHello(req: SayHelloRequest): SayHelloResponse {
    return {
      $typeName: 'hello.v1.SayHelloResponse',
      message: `Hello, ${req.name}!`,
    };
  }
}
