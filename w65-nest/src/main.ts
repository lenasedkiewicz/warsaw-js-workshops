import { NestFactory } from '@nestjs/core';
import { ErrorToMessage } from './api/error-to-messege';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ErrorToMessage());
  await app.listen(3000);
}
bootstrap();
