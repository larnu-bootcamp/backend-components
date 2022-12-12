import { ErrorRequestHandler } from 'express';

export const handleError: ErrorRequestHandler = function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  return res.status(status).send({ error: { status, message } });
};

export class createError extends Error {
  public status: number | undefined;
  /**
   * @param status request status number
   * @param message error message or err.message
   */
  constructor(status?: number, message?: string) {
    super(message);
    this.status = status;
  }
}
