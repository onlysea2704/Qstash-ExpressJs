import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import webhookRoutes from './routes/webhookRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', webhookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
