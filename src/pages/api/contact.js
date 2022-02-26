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

const mailer = ({ senderMail, name, assunto, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: `${email}`,
    subject: `${assunto}`,
    text,
    replyTo: `${senderMail}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info)
    })
  })
}

export default async (req, res) => {
  const { senderMail, name, assunto, content} = req.body;

  if(!senderMail || !name || !assunto || !content) {
    res.status(403).send();
    return
  }

  const mailerRes = await mailer({ senderMail, name, text: content, assunto });
  res.send(mailerRes);
};