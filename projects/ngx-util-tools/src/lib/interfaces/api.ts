export interface APISerializedResponse<T> {
  status: string;
  code: number;
  data: T;
  message: string;
}

export type tokenResponse = APISerializedResponse<{token: string}>;
