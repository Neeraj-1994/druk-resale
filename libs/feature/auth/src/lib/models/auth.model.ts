import {Address} from '../../../../../shared-components/src/lib/models/auth.model';

export class User {
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
  this.gender = undefined;
  this.birth_date = undefined;
  this.address = undefined;
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
