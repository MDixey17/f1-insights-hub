export interface Service {
  baseUrl: string;
  token?: string; // Some APIs may not require a token
}
