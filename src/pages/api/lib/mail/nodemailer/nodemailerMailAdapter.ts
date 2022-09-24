import nodemailer, { Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import { Mail, MailAdapter } from "../adapter/mailAdapter";

// ver variáveis ambiente
//

export class NodemailerMailAdapter implements MailAdapter {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "Zoho",
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      // tls: {
      //   ciphers: 'SSLv3',
      //   rejectUnauthorized: false,
      // },
    });
  }

  public async send({
    mail,
    userId,
  }: {
    mail: Mail;
    userId: string;
  }): Promise<void> {
    // converter o path em string
    const templateFileContent = fs.readFileSync(mail.path).toString("utf-8");

    // utilizar o handlebars pra fazer a leitura do arquivo
    const templateParse = handlebars.compile(templateFileContent);

    // converter as variáveis pra uma forma que ele entenda
    const templateHTML = templateParse(mail.variables);

    await new Promise((resolve, reject) => {
      this.transporter.sendMail(
        {
          to: mail.to,
          from: process.env.MAIL_FROM,
          subject: mail.subject,
          html: templateHTML,
        },
        (err: any, info: any) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log("Email enviado com sucesso");
            console.log(info);
            resolve(info);
          }
        }
      );
    });
  }
}
