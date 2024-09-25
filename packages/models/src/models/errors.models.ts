import { StatusCode } from 'hono/utils/http-status';

export class APIError extends Error {
  code: string;
  status: StatusCode;
  originalError?: Error;

  constructor(
    message: string,
    code: string,
    status: StatusCode,
    originalError?: Error
  ) {
    super(message);
    this.code = code;
    this.status = status;
    this.originalError = originalError;
  }
}

export interface IAPIError {
  code: string;
  message: string;
  status: StatusCode;
}

export interface ICompleteAPIError extends IAPIError {
  originalError: SerializedError;
}

export type SerializedError = {
  name?: string;
  message?: string;
  stack?: string;
  cause?: unknown;
  code?: string;
};
