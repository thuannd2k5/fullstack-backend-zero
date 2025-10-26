const Task = require("../models/task");

const createTaskService = async (data) => {
    if (data.type === "EMPTY-TASK") {
        let result = await Task.create(data);
        return result;
    }
}


const getAllTaskService = async () => {
    let result = await Task.find({});
    return result;
}

module.exports = {
    createTaskService, getAllTaskService
}