import Task from '../models/Task';
import {getPagination} from '../libs/getPagination';

export const getTasks = async (req, res) => {
    try {
        const {size, page, title} = req.query;
        const condition = title ? {
            title:  {$regex: new RegExp(title), $options: "i"},
        } : {};
        const {limit, offset} = getPagination(page, size);
        const data = await Task.paginate(condition, {offset, limit});
        res.json({
            tasks: data.docs,
            totalItem: data.totalDocs,
            totalPages: data.totalPages,
            currentPage: data.page-1,
        });

        //res.json(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message || 'Something goes wrong retrieving tasks' 
        });
    }
}

export const getDoneTasks = async (req, res) => {
    try {
        const tasks = await Task.find({done: true});
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message || 'Something goes wrong retrieving done tasks' 
        });
    }
}

export const createTask = async (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({message: 'Title is required'});
    }
    
    try {
        //console.log(req.body);
        const {title, description, done} = req.body;
        const newTask = new Task({
            title, 
            description,
            done: (done) ? done : false
        });
        const taskSaved = await newTask.save();
        res.status(201).json(taskSaved);
        //res.json('Saving a new task');
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message || 'Something goes wrong creating the task' 
        });
    }
}

export const getTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
        const task = await Task.findById(taskId);
        if (!task) return res.status(404).json({
            message: `Task with ${taskId} does not exists`
        });
        //console.log(task);
        res.status(200).json(task);
        //throw new Error('my error');
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message || 'Something goes wrong retrieving the task' 
        });
    }
}

export const updateTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
            new: true //porque mongoose obtiene por default retorna el objeto viejo y con este parametro retornaria el nuevo
        });
        //console.log(task);
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the task' 
        });
    }
}

export const deleteTaskById = async (req, res) => {
    const { taskId } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);
        //console.log(req.params.id);
        res.status(204).json({message: 'Task deleted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the task' 
        });
    }
}


