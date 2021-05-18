export class BaseError extends Error {
  constructor(
    public status = 500,
    public name = 'BaseError',
    public message: any,
    public type = 'base_error',
    public errors = []
  ) {
    super(message)

    this.name = name
    this.status = status
    this.type = type
    this.errors = errors
  }
}
