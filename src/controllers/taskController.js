const { createTaskService, getAllTaskService, updateTaskService } = require("../services/taskService");


const postCreateTaskApi = async (req, res) => {
    const result = await createTaskService(req.body);
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const getAllTaskApi = async (req, res) => {
    const result = await getAllTaskService(req.query);
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const putUpdateTaskApi = async (req, res) => {
    const { id, name, description, status, endDate } = req.body;
    const result = await updateTaskService(id, name, description, status, endDate);
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}


module.exports = {
    postCreateTaskApi, getAllTaskApi, putUpdateTaskApi
}