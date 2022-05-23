import app from './app';
import './database'; //no se guarda en un objeto porque el archivo no tiene exports

app.listen(app.get('port'));

console.log('Server on port ', app.get('port'));
