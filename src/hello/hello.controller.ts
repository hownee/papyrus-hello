import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { SayHelloRequest, SayHelloResponse } from '../proto/hello/v1/hello_pb';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @GrpcMethod('HelloService', 'SayHello')
  sayHello(
    data: SayHelloRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): SayHelloResponse {
    void metadata;
    void call;
    return this.helloService.sayHello(data);
  }
}
