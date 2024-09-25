import { StatusCode } from 'hono/utils/http-status';
import { ErrorObject } from 'serialize-error';

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
  originalError?: ErrorObject;
}
