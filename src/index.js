import express from 'express';
import logger from 'morgan';
import path from 'path';

import loginRouter from "./routes/login";
import selectRouter from "./routes/select";
import deleteRouter from "./routes/delete";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));

app.use('/', loginRouter);
app.use('/delete', deleteRouter);
app.use('/select', selectRouter);

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
});