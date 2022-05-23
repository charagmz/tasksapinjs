import {config} from 'dotenv';
config();//para que pueda cargar las variables de entorno

export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/tasksapi',
};
