import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const intAge = parseInt(value.age.toString());
    if (isNaN(intAge)) {
      throw new HttpException('Invalid age', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: intAge };
  }
}
