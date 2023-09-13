import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import router from './router/users.routes';
import { RealEstateRouter } from './router/realEstate.routes';
import { routerLogin } from './router/login.routes';
import { categoryRouter } from './router/category.routes';
import { handleError } from './middlewares/handle.middlewares';
import { schedulesRouter } from './router/schedule.routes';

const app: Application = express();

app.use(express.json());

app.use(router);
app.use(RealEstateRouter)
app.use(routerLogin)
app.use(categoryRouter)
app.use(schedulesRouter)
app.use(handleError);

export default app;
