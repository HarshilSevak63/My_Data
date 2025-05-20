const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'harshilsevak88@gmail.com',
    pass: 'mxtw efvj kvow qqij'
  }
});

// Email content options
const mailOptions = {
  from: 'harshilsevak88@gmail.com',
  to: 'sevakharshil434@example.com',
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent using Nodemailer.',
  html : '<h1>this is my test mail</h1>'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Email not sent Error occurred:', error);
  }
  console.log('Email sent successfully:', info.response);
});
