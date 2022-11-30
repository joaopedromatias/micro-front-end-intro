import express from "express";
import productsRouter from './router/products'
import cors from 'cors'

const app = express();
const port = 3002;

app.use(cors({ 
  origin: '*'
}))


app.use(express.json()); 

app.use('/api/products', productsRouter);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
