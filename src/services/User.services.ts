import Users, { UserLoginData } from "../mock/User.data";

export function userLogin({ email, password }: UserLoginData) {
  for (const user of Users) {
    if (user.email === email && user.password === password) {
      return user;
    }
  }
}
