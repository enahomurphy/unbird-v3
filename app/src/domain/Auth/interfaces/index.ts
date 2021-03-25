export interface ISignUp {
  firstName: string
  lastName: string
  company: string
  email: string
  password: string
  confirmPassword: string
  jobTitle: string
  aboutUs?: string
};

export interface ILogin {
  email: string
  password: string
};
