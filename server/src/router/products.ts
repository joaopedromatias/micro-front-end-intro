import { Router } from 'express';
import { getAllProducts, getProduct, addToCart} from '../controllers/products';
import auth from '../middlewares/auth';

const router = Router();

router.route('/').get(getAllProducts).post(auth, addToCart);
router.route('/:id').get(getProduct)

export default router