import { Router } from 'express';
import { getCart, addToCart, clearCart } from '../controllers/cart';

const router = Router();

router.route('/').get(getCart).delete(clearCart);
router.route('/:productId').post(addToCart);

export default router