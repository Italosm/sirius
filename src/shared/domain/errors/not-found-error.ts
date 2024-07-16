import DomainError from '@/shared/middleware/domain-error';

export class NotFoundError extends DomainError {
  public readonly name: string;
  constructor(public message: string) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}
