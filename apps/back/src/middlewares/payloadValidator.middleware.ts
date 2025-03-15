import { handleError } from '@utils/api.utils';
import { validator } from 'hono/validator';
import { ZodSchema } from 'zod';

export const payloadValidator = (schema: ZodSchema) =>
  validator('json', (value, c) => {
    const { success, data, error } = schema.safeParse(value);
    return success ? data : handleError(c, 'PAV-1', 'Invalid payload')(error);
  });
