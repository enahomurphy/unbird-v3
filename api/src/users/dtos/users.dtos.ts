import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UserIdRequestParamsDto {
  @IsString()
  readonly userId!: string;
}

@ObjectType()
export class TokenRes {
  @Field({ nullable: true })
  token?: string;
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

  @IsEmail()
  @Field()
  readonly email: string;

  @IsString()
  @Field()
  readonly firstName: string;

  @IsString()
  @Field()
  readonly lastName: string;

  @IsString()
  @Field()
  readonly jobTitle: string;
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
  @IsEmail()
  readonly email: string;

  @IsString()
  @Field()
  @MinLength(8)
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
