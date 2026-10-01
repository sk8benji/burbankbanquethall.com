import type { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  // Solo permitir solicitudes POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, phone, email, eventType, eventDate, guestCount, notes } = data;

    // Validar campos mínimos
    if (!name || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and phone are required.' })
      };
    }

    // Configuración SMTP de AWS SES
    const host = process.env.AWS_SES_HOST || 'email-smtp.us-east-1.amazonaws.com';
    const port = Number(process.env.AWS_SES_PORT) || 587;
    const user = process.env.AWS_SES_USER;
    const pass = process.env.AWS_SES_PASS;
    const fromEmail = process.env.EMAIL_FROM || 'info@burbankbanquethall.com';
    const toEmail = process.env.EMAIL_TO || 'events@burbankbanquethall.com';

    if (!user || !pass) {
      console.warn('AWS SES credentials not set in environment variables.');
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'Inquiry received (AWS SES credentials pending).'
        })
      };
    }

    // Crear transporte SMTP para AWS SES
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass
      }
    });

    const mailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e7e0d6;">
        <h2 style="color: #201f1d; border-bottom: 2px solid #C9A84C; padding-bottom: 10px;">
          Nueva Consulta - Burbank Banquet Hall
        </h2>
        <p><strong>Nombre del Cliente:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Email:</strong> ${email || 'No proporcionado'}</p>
        <p><strong>Tipo de Evento:</strong> ${eventType || 'No especificado'}</p>
        <p><strong>Fecha Estimada:</strong> ${eventDate || 'Por definir'}</p>
        <p><strong>Cantidad de Invitados:</strong> ${guestCount || 'No especificado'}</p>
        <p><strong>Notas / Requerimientos:</strong></p>
        <blockquote style="background: #f5f0e7; padding: 10px 15px; margin: 10px 0; border-left: 3px solid #C9A84C;">
          ${notes || 'Sin notas adicionales'}
        </blockquote>
        <hr style="border: 0; border-top: 1px solid #e7e0d6; margin: 20px 0;" />
        <small style="color: #888;">Enviado desde el sitio web burbankbanquethall.com a través de Amazon SES</small>
      </div>
    `;

    await transporter.sendMail({
      from: `"Burbank Banquet Hall" <${fromEmail}>`,
      to: toEmail,
      replyTo: email || fromEmail,
      subject: `Nuevo Lead: ${eventType || 'Evento'} - ${name}`,
      html: mailHtml
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Email sent successfully!' })
    };
  } catch (error: any) {
    console.error('Error sending email via AWS SES:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || 'Internal Server Error' })
    };
  }
};
