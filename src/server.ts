import express, { response } from 'express'

const app = express();


app.listen(5000, () => {
    console.log("rodando")
})


app.get('/', (req, res) => response.json({message: 'hello'}))