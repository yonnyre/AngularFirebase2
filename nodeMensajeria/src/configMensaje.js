const nodemailer = require('nodemailer');

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '', // Cambialo por tu email
      pass: '' // Cambialo por tu password
    }
  });

  const mailOptions = {
    from: `"${formulario.nombre}" <${formulario.email}>`,
    to: formulario.destino, 
    subject: formulario.asunto,
    html: `
    Código:<strong>${formulario.mensaje}</strong> 
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}