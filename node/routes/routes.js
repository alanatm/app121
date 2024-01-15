import express from 'express';
import { createSale, deleteSale, getAllSales, getsale, updateSale } from '../controllers/SalesController.js';
const router = express.Router();

router.get('/', getAllSales);
router.get('/:dn',getsale);
router.post('/',createSale);
router.put('/:dn', updateSale);
router.delete('/dn', deleteSale);

export default router;