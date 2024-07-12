import { env } from '../env-config/env';
import { app } from './app';

const port = env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server started on port ${port} 💻🖥`);
});
