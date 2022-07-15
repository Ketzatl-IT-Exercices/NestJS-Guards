import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port: number = 3400;
  const app = await NestFactory.create(AppModule);
  await app.listen(`${port}`);
  console.log(`\n\t >> App listening on port ${port} <<`)
}
bootstrap();
