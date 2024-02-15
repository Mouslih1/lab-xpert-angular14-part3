export class LoggerUser
{
  constructor(public username: string,
    public roles: string[],
    private _token: string,
    private _expiration: Date)
  {}

  get token()
  {
    if(!this._expiration || new Date() > this._expiration)
    {
      return null;
    }

    return this._token;
  }
}
