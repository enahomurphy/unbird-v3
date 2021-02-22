import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { SMSProcessor } from './sms.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'sms',
    }),
  ],
  providers: [SMSProcessor],
})
export class SmsModule {}
