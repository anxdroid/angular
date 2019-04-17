export interface LoginRequest{
  email: string;
  password: string;
  company: string;
};

export const EMPTY_LOGIN_REQUEST: LoginRequest = {
  email: undefined,
  password: undefined,
  company: undefined
};
