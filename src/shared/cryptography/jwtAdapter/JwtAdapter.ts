import { sign } from "jsonwebtoken";

interface IPayload {
  user: {
    id: string;
    email: string;
    name: string;
  };
}

interface ISignOptions {
  subject: string;
  expiresIn: string;
}

class JwtAdapter {
  constructor(private readonly secret: string) {}

  async encrypt(payload: IPayload, options: ISignOptions): Promise<string> {
    const token = sign(payload, this.secret, options);
    return token;
  }
}

export { JwtAdapter };
