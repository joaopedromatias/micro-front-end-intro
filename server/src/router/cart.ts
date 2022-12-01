import { Router } from 'express';
import { getCart, addToCart } from '../controllers/cart';

const router = Router();

router.route('/').get(getCart);
router.route('/:productId').post(addToCart);

export default router