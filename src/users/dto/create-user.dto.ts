export class CreateUserDto {
  name: string;
  phone: string;
  pin: string;
}

export class LoginDto {
    phone: string;
    pin: string;
  }
  export class SignUpDto {
    phone: string;
    pin: string;
    name:string;
    nationalId:string
  }