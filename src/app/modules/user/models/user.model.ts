export class User {
  firstName?: string;
  lastName?: string;
  login?: string;
  password?: string;
  token?: string;
}

export enum UserFieldMinLength {
  FIRST_NAME = 2,
  LAST_NAME = 2,
  LOGIN = 2,
  PASSWORD = 5
}

export enum UserFieldMaxLength {
  FIRST_NAME = 20,
  LAST_NAME = 20,
  LOGIN = 10,
  PASSWORD = 20
}
