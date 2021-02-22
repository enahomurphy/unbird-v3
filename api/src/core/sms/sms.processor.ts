// eslint-disable-next-line @typescript-eslint/no-var-requires
const Vonage = require('nexmo');
import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { keys } from 'src/core/config';

@Processor('sms')
export class SMSProcessor {
  private readonly logger = new Logger(SMSProcessor.name);

  private api = new Vonage({
    apiKey: keys.sms.accountId,
    apiSecret: keys.sms.authToken,
  });

  sendSms(sender: string, recipient: string, message: string) {
    return new Promise((resolve, reject) => {
      this.api.message.sendSms(
        sender,
        recipient,
        message,
        {},
        (error, response) => {
          if (error) return reject(error);

          resolve(response);
        },
      );
    });
  }

  @Process('send')
  async handleSend(job: Job) {
    this.logger.debug('Start sending sms');

    // await this.sendSms(job.data.from, job.data.to, job.data.body);

    this.logger.debug(job.data);
    this.logger.debug('Sending of sms completed');
  }
}
