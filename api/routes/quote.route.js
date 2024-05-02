import express from 'express';
import saveQuoteFormData from '../controllers/quote.controller.js';

const router = express.Router();

router.post('/post', saveQuoteFormData);


export default router;