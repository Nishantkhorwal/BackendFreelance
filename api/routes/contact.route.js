import express from 'express';
import saveFormData from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/post', saveFormData);


export default router;