export interface ISignUp {
  company: string
  email: string
  password: string
  confirmPassword: string
  job: string
  aboutUs?: string
};

export interface ILogin {
  email: string
  password: string
};
