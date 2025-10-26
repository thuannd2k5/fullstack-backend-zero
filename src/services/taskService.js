const Task = require("../models/task");
const aqp = require('api-query-params');


const createTaskService = async (data) => {
    if (data.type === "EMPTY-TASK") {
        let result = await Task.create(data);
        return result;
    }
}


const getAllTaskService = async (queryString) => {
    const page = queryString.page;

    const { filter, limit } = aqp(queryString);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Task.find(filter)
        .skip(offset)
        .limit(limit)
        .exec();
    return result
}

module.exports = {
    createTaskService, getAllTaskService
}