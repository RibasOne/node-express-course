import express from 'express';
const router = express.Router();

import { 
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask 
} from '../controllers/tasks.js';

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;