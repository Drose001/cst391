import { Router } from 'express';
import {
  addItem,
  editItem,
  getAllItems,
  getItemById,
  removeItem
} from '../controllers/itemController';
import { validateItem } from '../middleware/validateItem';

const router = Router();

router.get('/', getAllItems);
router.get('/:id', getItemById);
router.post('/', validateItem, addItem);
router.put('/:id', validateItem, editItem);
router.delete('/:id', removeItem);

export default router;
