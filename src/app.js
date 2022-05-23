import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import tasksRoutes from './routes/tasks.routes';

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
const corsOptions = {};
//const corsOptions = {origin: 'http://localhost:3000'};
app.use(cors(corsOptions));//que direccion tiene permitido hacer peticiones aqui
app.use(morgan('dev'));
app.use(express.json());//para entender peticiones con json
app.use(express.urlencoded({extended: false}));//para entender peticiones con parametros desde formularios html

// routes
app.get('/', (req, res) => {
    res.json({message: 'Wellcome to my application'});
});

app.use('/api/tasks', tasksRoutes);

export default app;
