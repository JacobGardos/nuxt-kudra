export class CliError extends Error {
  /**
   * Hide the error stack and only log the message
   * @default false
   */
  public msgOnly: boolean;

  constructor(msg: string, msgOnly?: boolean) {
    super(msg);
    this.msgOnly = msgOnly ?? false;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CliError.prototype);
  }
}
