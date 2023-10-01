import express, { json } from 'express';
import cors from 'cors';
import db from './database/db.js';
import { productsRouter } from './routes/products-router.js';
const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(json())
const PORT = process.env.PORT ?? 3000

app.use('/products', productsRouter)

async function checkDatabaseConnection() {
	try {
		await db.authenticate();
		console.log('Conexión a la base de datos establecida correctamente.');
	} catch (error) {
		console.error('No se pudo conectar a la base de datos:', error);
	}
}
checkDatabaseConnection();

app.listen(PORT, () =>
console.log(`listening port ${PORT}`))