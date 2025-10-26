const { createTaskService, getAllTaskService } = require("../services/taskService");


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


module.exports = {
    postCreateTaskApi, getAllTaskApi
}