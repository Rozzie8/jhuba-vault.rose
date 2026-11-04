import express from 'express';
import cors from 'cors';
import routes from './routes';
import { env } from './config/env';
import { errorHandler, notFound } from './middleware/errors';

export const app = express();
const allowedOrigins = new Set([
  ...env.CLIENT_URL.split(',').map(origin => origin.trim()).filter(Boolean),
  'http://localhost:4000',
  'http://localhost:4200'
]);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error(`Origin is not allowed: ${origin}`));
  },
  credentials: true
}));
app.use(express.json({ limit: '1mb' }));
app.use((req, _res, next) => { if (req.path !== '/api/health') console.info(`${req.method} ${req.path}`); next(); });
app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);
