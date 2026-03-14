import { Request, Response, NextFunction } from 'express';

export const validateItem = (req: Request, res: Response, next: NextFunction): void => {
  const { name, category, quantity, price, store_name, purchased } = req.body;

  if (!name || !category || quantity === undefined || price === undefined || !store_name || purchased === undefined) {
    res.status(400).json({ message: 'All fields are required.' });
    return;
  }

  if (typeof quantity !== 'number' || quantity < 0) {
    res.status(400).json({ message: 'Quantity must be a number greater than or equal to 0.' });
    return;
  }

  if (typeof price !== 'number' || price < 0) {
    res.status(400).json({ message: 'Price must be a number greater than or equal to 0.' });
    return;
  }

  if (typeof purchased !== 'boolean') {
    res.status(400).json({ message: 'Purchased must be true or false.' });
    return;
  }

  next();
};
