import mongoose from "mongoose";
import config from './config';

//para que la funcion se llame solo con importar el archivo
//funcion anonima "() => {}" invocada dentro de una funcion inmediatamente invocada "(() => {})()" 
(async () => {
    try {
        const db = await mongoose.connect(config.mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Db is connected', db.connection.name);
        //    .catch(error => console.log(error));
    } catch (error) {
        console.error(error);
    }
})();