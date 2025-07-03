import { HTTPMethod, RequestOptions } from "./types";

export class BaseCin7SDK {
  protected accountId: string;
  protected applicationKey: string;
  protected baseURL: string =
    "https://inventory.dearsystems.com/externalapi/v2/";

  constructor(accountId: string, applicationKey: string) {
    this.accountId = accountId;
    this.applicationKey = applicationKey;
  }

  protected async makeRequest<T>(
    endpoint: string,
    options: RequestOptions
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      "api-auth-accountid": this.accountId,
      "api-auth-applicationkey": this.applicationKey,
      ...options.headers,
    };

    const response = await fetch(url, {
      method: options.method,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  protected async get<T>(
    endpoint: string,
    params?: Record<string, any>
  ): Promise<T> {
    const searchParams = params ? new URLSearchParams(params).toString() : "";
    const fullEndpoint = searchParams
      ? `${endpoint}?${searchParams}`
      : endpoint;

    return this.makeRequest<T>(fullEndpoint, { method: "GET" });
  }

  protected async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.makeRequest<T>(endpoint, { method: "POST", body: data });
  }

  protected async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.makeRequest<T>(endpoint, { method: "PUT", body: data });
  }

  protected async delete<T>(endpoint: string): Promise<T> {
    return this.makeRequest<T>(endpoint, { method: "DELETE" });
  }
}
