import express, {Request, Response} from "express";
import productsRouter from './router/products'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = 3002;

app.use(cors({ 
  origin: '*'
}))

app.use(express.json()); 

app.use('/api/products', productsRouter);

app.get('/token', (req: Request, res: Response) => { 
  const { userId } = req.body;
  if (userId) { 
    const token = jwt.sign({ userId }, process.env.JWT_SECRET!)
    return res.status(201).json({sucess: true, data: token});
  }
  return res.status(400).json({sucess: false, message: 'need to provide the user id'});
})

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});