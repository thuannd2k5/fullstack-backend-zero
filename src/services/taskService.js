const Task = require("../models/task");

const createTaskService = async (data) => {
    if (data.type === "EMPTY-TASK") {
        let result = await Task.create(data);
        return result;
    }
}

module.exports = {
    createTaskService
}