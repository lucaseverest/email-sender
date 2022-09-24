/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Mail {
  to: string;
  subject: string;
  path: string;
  variables: any;
}

export interface MailAdapter {
  send({ mail, userId }: { mail: Mail; userId: string }): Promise<void>;
}
