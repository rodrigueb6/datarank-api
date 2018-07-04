import nodemailer from 'nodemailer';

const from = '"Datarank" <info@datarank.com>';

function setup() {
  return nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '2a95870c424a07',
      pass: '57784712d7fd35'
    }
  });
}

export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Welcome to Datarank!',
    text: `
        Welcome to Datarank! Please, confirm your email.
        
        ${user.generateConfirmationUrl()}
        `
  };

  transport.sendMail(email);
}
