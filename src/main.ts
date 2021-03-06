import './bootstrap/set-environment';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SetCors } from './bootstrap/set-cors';
import { SetHelmet } from './bootstrap/set-helmet';
import { SetSwagger } from './bootstrap/set-swagger';
import { SetCookieParser } from './bootstrap/set-cookie-parser';
import { SetSessionManager } from './bootstrap/set-session-manager';
const { PORT } = process.env;

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SetCookieParser(app);
  SetCors(app);
  SetHelmet(app);
  SetSwagger(app);
  SetSessionManager(app);

  await app.listen(Number(PORT) || 3000);
})();
