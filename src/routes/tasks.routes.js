import {Router} from 'express';
import * as taskCtrl  from '../controllers/task.controller';
const router = Router();

router.get('/', taskCtrl.getTasks);

router.get('/done', taskCtrl.getDoneTasks);

router.get('/:taskId', taskCtrl.getTaskById);

router.post('/', taskCtrl.createTask);

router.put('/:taskId', taskCtrl.updateTaskById);

router.delete('/:taskId', taskCtrl.deleteTaskById);

export default router; 
