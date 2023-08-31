import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { BaseModel } from '../../common/models/base.model';
// import { Role } from '@prisma/client';

// registerEnumType(Role, {
//   name: 'Role',
//   description: 'User role',
// });

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => String, { nullable: true })
  mobileNumber?: string;

  @HideField()
  password: string;
}
