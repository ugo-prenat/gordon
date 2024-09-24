import { StatusCode } from 'hono/utils/http-status';

export class APIError extends Error {
  status: StatusCode;
  originalError?: Error;

  constructor(message: string, status: StatusCode, originalError?: Error) {
    super(message);
    this.status = status;
    this.originalError = originalError;
  }
}
