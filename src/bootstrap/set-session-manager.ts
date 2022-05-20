import { INestApplication } from '@nestjs/common';
import * as session from 'express-session';
import { TypeormStore } from 'connect-typeorm';
import * as passport from 'passport';
import { Session } from '../app/auth/entities/session.entity';
import { getRepository } from 'typeorm';

export const SetSessionManager = (app: INestApplication) => {
  const sessionRepo = getRepository(Session);

  app.use(
    session({
      cookie: {
        maxAge: 60000 * 60 * 24 * 30 * 6,
        sameSite: 'none',
      },
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore().connect(sessionRepo),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
