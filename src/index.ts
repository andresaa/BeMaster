import express, { Express } from "express";
import dotenv from "dotenv";

import { repositoriesRouter } from './routes/repositories'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/api/repositories', repositoriesRouter);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});