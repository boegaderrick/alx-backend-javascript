import router from './routes/index';
import express from 'express';

const app = express();
app.use('/', router);
app.listen(1245);

export default app;
