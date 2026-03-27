import { Request, Response, NextFunction } from 'express';

export const validateItem = (req: Request, res: Response, next: NextFunction): void => {
  const { name, category, quantity, price, store_name, purchased } = req.body;

  if (
    name === undefined || name === null || name === '' ||
    category === undefined || category === null || category === '' ||
    quantity === undefined || quantity === null ||
    price === undefined || price === null ||
    store_name === undefined || store_name === null || store_name === '' ||
    purchased === undefined || purchased === null
  ) {
    res.status(400).json({ message: 'All fields are required.' });
    return;
  }

  const parsedQuantity = Number(quantity);
  const parsedPrice = Number(price);

  if (Number.isNaN(parsedQuantity) || parsedQuantity < 0) {
    res.status(400).json({ message: 'Quantity must be a number greater than or equal to 0.' });
    return;
  }

  if (Number.isNaN(parsedPrice) || parsedPrice < 0) {
    res.status(400).json({ message: 'Price must be a number greater than or equal to 0.' });
    return;
  }

  if (typeof purchased !== 'boolean' && purchased !== 0 && purchased !== 1) {
    res.status(400).json({ message: 'Purchased must be true/false or 0/1.' });
    return;
  }

  req.body.quantity = parsedQuantity;
  req.body.price = parsedPrice;
  req.body.purchased = purchased === true || purchased === 1;

  next();
};