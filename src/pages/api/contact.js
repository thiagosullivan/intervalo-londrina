import nodemailer from 'nodemailer';

const email = process.env.MAILADDRESS;
const emailPass = process.env.MAILPASS;

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  auth: {
    user: email,
    pass: emailPass
  }
});

const mailer = ({ senderMail, nome, assunto, text }) => {
  const from = nome && senderMail ? `${nome} <${senderMail}>` : `${nome || senderMail}`;
  const message = {
    from,
    to: `${email}`,
    subject: `${assunto}`,
    text: `
      Nome: ${nome}\n
      ${text}
    `,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info)
    })
  })
}

export default async (req, res) => {
  const { senderMail, nome, content} = req.body;

  if(!senderMail || !nome || !content) {
    res.status(403).send();
    return
  }

  const mailerRes = await mailer({ senderMail, nome, text: content });
  res.send(mailerRes);
};