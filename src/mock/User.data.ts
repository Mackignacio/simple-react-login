export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserData extends UserLoginData {
  name: string;
}

const users: UserData[] = [
  {
    email: "test@test.com",
    password: "test",
    name: "test",
  },
  {
    email: "other@test.com",
    password: "other",
    name: "other",
  },
];

export default users;
