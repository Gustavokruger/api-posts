import express, { response } from 'express'
import './database';
import routes from './routes';
import bodyParser from 'body-parser'


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', routes)

app.listen(5000, () => {
    console.log("rodando")
})
