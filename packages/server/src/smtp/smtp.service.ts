import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class SmtpService {
    async sendMail(config): Promise<any> {
        return new Promise((resolve, reject) => {
            const transporter = createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            });

            const mailOptions = {
                from: 'soorajshankar@gmail.com',
                to: 'soorajshankar@gmail.com',
                subject: 'Sending Email using Node.js',
                text: 'That was easy!',
            };

            return transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject({ status: 'FAILED', resp: info.response });
                } else {
                    resolve({ status: 'SENT', resp: info.response });
                }
            });
        });
    }
}
