import 'express-async-errors';

import { NotFoundError, currentUser, errorHandler } from '@stxtickets/common';

import cookieSession from 'cookie-session';
import express from 'express';
import { json } from 'body-parser';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
