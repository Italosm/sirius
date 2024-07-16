import ApplicationError from '../../middleware/application-error';

export class InvalidCredentialsError extends ApplicationError {
  public readonly name: string;
  constructor(public message: string) {
    super(message);
    this.name = 'InvalidCredentialsError';
  }
}
