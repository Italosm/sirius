import ApplicationError from '@/shared/middleware/application-error';

export class BadRequestError extends ApplicationError {
  public readonly name: string;
  constructor(public message: string) {
    super(message);
    this.name = 'BadRequestError';
  }
}
