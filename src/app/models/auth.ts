export interface RegisterRequest {
  email: string;
  password: string;
  address: Address;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface Address {
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface JwtResponse {
  token: string;
  email: string;
  role: 'CLIENT' | 'ADMIN';
}