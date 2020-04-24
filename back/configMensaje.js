const nodeoutlook = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'luisfranciscopf@gmail.com', // Cambialo por tu email
 pass: 'master1198' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `"${formulario.nombre} " <${formulario.email}>`,
 to: 'luisfranciscopf@gmail.com', // Cambia esta parte por el destinatario
 subject: 'Manantial',
 html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>Teléfono:</strong> ${formulario.telefono} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}