import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '8cafa6ff406b09',
    pass: '0b0181b1fe56a5',
  },
})

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedback = await prisma.feedbacks.create({
    data: {
      type,
      comment,
      screenshot,
    },
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Alex Mello <admmello@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif"; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join(''),
  })

  return res.status(201).json({ data: feedback })
})

app.listen(3333, () => {
  console.log('HTTP Server Running...')
})
