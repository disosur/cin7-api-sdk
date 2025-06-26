export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface RequestOptions {
  method: HTTPMethod;
  headers?: Record<string, string>;
  body?: any;
}