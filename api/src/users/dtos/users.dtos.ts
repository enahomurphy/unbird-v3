import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UserIdRequestParamsDto {
  @IsString()
  readonly userId!: string;
}

export class UserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;
}

@InputType()
export class CreateUserDto {
  @IsString()
  @Field()
  readonly password: string;

  @IsString()
  @Field()
  readonly phone: string;
}

@InputType()
export class VerifyOUserTPDto {
  @IsString()
  @MinLength(6)
  @MaxLength(6)
  @Field()
  readonly otp: string;
}

@InputType()
export class UserLoginDTO {
  @IsString()
  @Field()
  readonly phone: string;

  @IsString()
  @Field()
  readonly password: string;
}

@InputType()
export class UserAccountUpdateDTO {
  @Field({ nullable: true })
  fullName?: string;

  @Field({ nullable: true })
  address?: string;

  @IsEmail()
  @Field()
  email?: string;
}

@ObjectType()
export class VerifyResetPasswordTokenResponseDTO {
  @Field({ nullable: true })
  token?: string;

  @Field({ nullable: true })
  message?: string;
}

@InputType()
export class VerifyResetPasswordTokenDTO extends VerifyOUserTPDto {
  @Field()
  @MinLength(6)
  readonly phone: string;
}

@InputType()
export class ResetPasswordDTO {
  @IsString()
  @Field()
  readonly token: string;

  @IsString()
  @Field()
  readonly password: string;
}
