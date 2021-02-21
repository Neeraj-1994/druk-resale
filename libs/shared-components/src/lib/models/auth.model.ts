export class User {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
  gender?: string;
  birth_date?: Date;
  address: Address;

  constructor() {
    this.first_name = undefined;
    this.last_name = undefined;
    this.email = undefined;
    this.phone = undefined;
    this.password = undefined;
    this.confirm_password = undefined;
    this.address = undefined;
  }
}

export class Address {
  street: string;
  opt_address_one: string;
  opt_address_two: string;
  city: string;
  district: string;

  constructor() {
    this.street = undefined;
    this.opt_address_one = undefined;
    this.opt_address_two = undefined;
    this.city = undefined;
    this.district = undefined;
  }
}

export class UserLogin {
  email: string;
  password: string;

  constructor() {
    this.email = undefined;
    this.password = undefined;
  }

}

export class ForgotPassword {
  email: string;

  constructor() {
    this.email = undefined;
  }
}
