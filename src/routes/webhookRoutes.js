import express from 'express';
import { handleWebhook1, handleWebhook2 } from '../controllers/webhookController.js';
import { qstashAuth } from '../middleware/qstashAuth.js';

const router = express.Router();

router.post('/webhook1', qstashAuth, handleWebhook1);
router.post('/webhook2', qstashAuth, handleWebhook2);

export default router;
