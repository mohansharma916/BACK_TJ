import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  mobileNumber?: string;
  @Field({ nullable: true })
  location?: string;
}
