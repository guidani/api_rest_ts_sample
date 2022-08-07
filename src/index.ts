import express from 'express';
import { AppDataSoure } from "./data-source";

AppDataSoure.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.get('/', (req, res) => {
        return res.json('ok')
    })

    return app.listen(process.env.PORT, () => {
        console.log('rodando na porta  3000')
    })
})