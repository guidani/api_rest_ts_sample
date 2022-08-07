import express from 'express';
import { AppDataSoure } from "./data-source";
import routes from './routes';

AppDataSoure.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(routes)

    return app.listen(process.env.PORT, () => {
        console.log('rodando na porta  3000')
    })
})