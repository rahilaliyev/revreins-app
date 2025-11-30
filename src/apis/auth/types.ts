export interface IRegisterPayload {
  email: string;
}

export interface ILoginPayload extends IRegisterPayload {
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  expires_in: number;
}
