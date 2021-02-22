import { Process, Processor } from '@nestjs/bull';
import { createTransport } from 'nodemailer';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { keys } from 'src/core/config';

@Processor('email')
export class EmailProcessor {
  private readonly logger = new Logger(EmailProcessor.name);

  private transporter = createTransport({
    host: keys.email.host,
    port: 587,
    secure: false,
    auth: {
      user: keys.email.user,
      pass: keys.email.password,
    },
  });

  @Process('send')
  async handleSend(job: Job) {
    this.logger.debug('Start sending email');
    const mail: Record<string, string> = {};
    mail.from = `${job.data.from} <${keys.email.user}>`;
    mail.to = job.data.to;
    mail.subject = job.data.subject;

    if (job.data.text) {
      mail.text = job.data.text;
    }

    if (job.data.html) {
      mail.html = job.data.html;
    }

    await this.transporter.sendMail(mail);
    this.logger.debug(job.data);
    this.logger.debug('Sending of email completed');
  }
}
