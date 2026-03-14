import pool from '../config/db';
import { Item } from '../models/Item';

export const findAllItems = async () => {
  const [rows] = await pool.query('SELECT * FROM items ORDER BY id');
  return rows;
};

export const findItemById = async (id: number) => {
  const [rows] = await pool.query('SELECT * FROM items WHERE id = ?', [id]);
  return rows;
};

export const createItem = async (item: Item) => {
  const sql = `INSERT INTO items (name, category, quantity, price, store_name, purchased)
               VALUES (?, ?, ?, ?, ?, ?)`;
  const [result] = await pool.query(sql, [
    item.name,
    item.category,
    item.quantity,
    item.price,
    item.store_name,
    item.purchased
  ]);
  return result;
};

export const updateItem = async (id: number, item: Item) => {
  const sql = `UPDATE items
               SET name = ?, category = ?, quantity = ?, price = ?, store_name = ?, purchased = ?
               WHERE id = ?`;
  const [result] = await pool.query(sql, [
    item.name,
    item.category,
    item.quantity,
    item.price,
    item.store_name,
    item.purchased,
    id
  ]);
  return result;
};

export const deleteItem = async (id: number) => {
  const [result] = await pool.query('DELETE FROM items WHERE id = ?', [id]);
  return result;
};
