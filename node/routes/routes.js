import express from 'express';
import { createSale, deleteSale, getAllSales, getsale, updateSale } from '../controllers/SalesController.js';
const router = express.Router();

router.get('/', getAllSales);
router.get('/:id',getsale);
router.post('/',createSale);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);

export default router;