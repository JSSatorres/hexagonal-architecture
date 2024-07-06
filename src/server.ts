import express from 'express';
import userRouter from './user/infrastructure/UserRoutes';


const app = express();
app.use(express.json());
app.use('/api', userRouter);

export default app;