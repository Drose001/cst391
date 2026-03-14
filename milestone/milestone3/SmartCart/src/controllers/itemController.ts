import { Request, Response } from 'express';
import * as itemDao from '../dao/itemDao';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export const getAllItems = async (_req: Request, res: Response): Promise<void> => {
  try {
    const items = await itemDao.findAllItems();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch items.' });
  }
};

export const getItemById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const rows = await itemDao.findItemById(id) as RowDataPacket[];

    if (!rows || rows.length === 0) {
      res.status(404).json({ message: 'Item not found.' });
      return;
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch item.' });
  }
};

export const addItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await itemDao.createItem(req.body) as ResultSetHeader;
    res.status(201).json({
      message: 'Item created successfully.',
      id: result.insertId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create item.' });
  }
};

export const editItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const result = await itemDao.updateItem(id, req.body) as ResultSetHeader;

    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Item not found.' });
      return;
    }

    res.status(200).json({ message: 'Item updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update item.' });
  }
};

export const removeItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const result = await itemDao.deleteItem(id) as ResultSetHeader;

    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Item not found.' });
      return;
    }

    res.status(200).json({ message: 'Item deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete item.' });
  }
};
