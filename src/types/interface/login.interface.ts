export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginInputType {
  name: keyof LoginPayload;
  label: string;
  type: string;
  placeholder: string;
}