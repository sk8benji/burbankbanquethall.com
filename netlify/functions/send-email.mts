import type { Handler } from '@netlify/functions';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

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

    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    const region = process.env.AWS_REGION || 'us-east-1';
    const fromEmail = process.env.EMAIL_FROM || 'info@burbankbanquethall.com';
    const toEmail = process.env.EMAIL_TO || 'sk8benji@gmail.com';

    if (!accessKeyId || !secretAccessKey) {
      console.warn('AWS SES credentials not set in environment variables.');
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: 'Inquiry received (AWS SES credentials pending).'
        })
      };
    }

    const client = new SESClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    });

    const mailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e7e0d6; border-radius: 8px;">
        <div style="background-color: #201f1d; padding: 20px; text-align: center; border-radius: 6px 6px 0 0;">
          <h2 style="color: #C9A84C; margin: 0; font-size: 20px; letter-spacing: 1px;">BURBANK BANQUET HALL</h2>
          <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 13px;">Nueva Consulta de Cliente</p>
        </div>
        <div style="padding: 24px; background: #ffffff;">
          <p><strong>Nombre del Cliente:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> <a href="tel:${phone}" style="color: #C9A84C; text-decoration: none; font-weight: bold;">${phone}</a></p>
          <p><strong>Email:</strong> ${email ? `<a href="mailto:${email}">${email}</a>` : 'No proporcionado'}</p>
          <p><strong>Tipo de Evento:</strong> ${eventType || 'No especificado'}</p>
          <p><strong>Fecha Estimada:</strong> ${eventDate || 'Por definir'}</p>
          <p><strong>Cantidad de Invitados:</strong> ${guestCount || 'No especificado'}</p>
          <p><strong>Mensaje / Requerimientos:</strong></p>
          <blockquote style="background: #fdfaf5; padding: 12px 16px; margin: 12px 0; border-left: 4px solid #C9A84C; color: #444;">
            ${notes || 'Sin notas adicionales'}
          </blockquote>
        </div>
        <div style="background: #f5f0e7; padding: 12px; text-align: center; font-size: 11px; color: #777; border-radius: 0 0 6px 6px;">
          Enviado automáticamente desde el sitio web burbankbanquethall.com vía Amazon SES
        </div>
      </div>
    `;

    const mailText = `
Nueva Consulta - Burbank Banquet Hall
-------------------------------------
Nombre: ${name}
Teléfono: ${phone}
Email: ${email || 'No proporcionado'}
Tipo de Evento: ${eventType || 'No especificado'}
Fecha: ${eventDate || 'Por definir'}
Invitados: ${guestCount || 'No especificado'}
Notas: ${notes || 'Sin notas adicionales'}
    `;

    const command = new SendEmailCommand({
      Source: `"Burbank Banquet Hall" <${fromEmail}>`,
      Destination: {
        ToAddresses: [toEmail]
      },
      ReplyToAddresses: email ? [email] : [fromEmail],
      Message: {
        Subject: {
          Data: `Nuevo Lead: ${eventType || 'Evento'} - ${name}`,
          Charset: 'UTF-8'
        },
        Body: {
          Html: {
            Data: mailHtml,
            Charset: 'UTF-8'
          },
          Text: {
            Data: mailText,
            Charset: 'UTF-8'
          }
        }
      }
    });

    const response = await client.send(command);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully via AWS SES!',
        messageId: response.MessageId
      })
    };
  } catch (error: any) {
    console.error('Error sending email via AWS SES SDK:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || 'Internal Server Error' })
    };
  }
};
