import { NotFoundError } from '@/shared/domain/errors/not-found-error';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

routes.get('/not-fount', (req, res) => {
  throw new NotFoundError('rota para teste de erro not found');
});

routes.get('/not-fount', (req, res) => {
  throw new NotFoundError('rota para teste de erro not found');
});

export default routes;
