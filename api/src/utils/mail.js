const nodemailer = require('nodemailer');

const sendEmail = async options => {
    // Crear un transporter
    const transporter = nodemailer.createTransport({
host:process.env.EMAIL_HOST,
port: process.env.EMAIL_PORT,
auth: {
    user:process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
} 
    });
    // Definir las opciones del mail
const mailOptions = {
    from: 'Sebastián Laserna laserna.seba@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
};
    // Enviar el mail con nodemailer
  await transporter.sendMail(mailOptions)
};

module.exports = sendEmail;