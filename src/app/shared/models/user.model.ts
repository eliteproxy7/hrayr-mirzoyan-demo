/*
export interface User {
  id?: string;
  displayName?: string;
  role?: string
}
*/
export class User {
  id?: string;
  displayName?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  role?: string;
}


export class Login {
  username: string;
  password: string;
}