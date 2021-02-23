export interface Profile {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio?: string;
  image?: string | null;
}
export interface UserResponse {
  user: User;
}

export interface UserSubmit {
  email: string;
  password: string;
}
