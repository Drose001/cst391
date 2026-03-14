import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'SmartCart Grocery Planner API is running.' });
});

app.use('/api/items', itemRoutes);

export default app;
