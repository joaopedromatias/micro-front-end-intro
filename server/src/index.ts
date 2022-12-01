import express from "express";
import productsRouter from './router/products'
import cartRouter from './router/cart'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = 3002;

app.use(cors({ 
  origin: '*'
}))

app.use(express.json()); 

app.use('/api/products', productsRouter);
app.use('/cart', cartRouter);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});