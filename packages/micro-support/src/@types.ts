import { HttpStatus } from "@nestjs/common";

export type ServiceResponse<T = string | Record<string, unknown>> = {
  status: HttpStatus;
  message: T;
  error?: string;
};
