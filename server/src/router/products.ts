import { Router } from 'express';
import { getAllProducts, getProduct, addToCart} from '../controllers/products';

const router = Router();

router.route('/').get(getAllProducts);
router.route('/:id').get(getProduct).post(addToCart);

export default router