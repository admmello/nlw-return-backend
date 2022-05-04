import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from './../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '8cafa6ff406b09',
    pass: '0b0181b1fe56a5',
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Alex Mello <admmello@gmail.com>',
      subject,
      html: body,
    })
  }
}
