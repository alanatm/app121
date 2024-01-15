import express from 'express';
import cors from 'cors';
//importar conexión a base de datos
import db from './database/db.js'

import saleRoutes from './routes/routes.js';

const app = express();

app.use( cors());
app.use(express.json());
app.use('/sales', saleRoutes);


try {
    await db.authenticate()
    console.log("conexión exitosa a la DB");
} catch (error) {
    console.log(`El error de conexión es:"${error}` );
}

// app.get('/', (req,res)=>{
//     res.send('Holi')
// })

app.listen(8000, ()=>{

    console.log('Server UP running in http://localhost:8000')
}
);