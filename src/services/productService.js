const Project = require("../models/project");
const aqp = require('api-query-params');

const createProjectService = async (data) => {
    if (data.type === "EMPTY-PROJECT") {
        let result = await Project.create(data);
        return result
    }
    if (data.type === "ADD-USERS") {
        console.log("check data", data);
        let myProject = await Project.findById(data.projectId).exec();

        for (let i = 0; i < data.userArr.length; i++) {
            myProject.userInfo.push(data.userArr[i]);
        }
        let result = await myProject.save();
        console.log(myProject);
        //find project by id

        return result
    }
    if (data.type === "REMOVE-USERS") {
        let myProject = await Project.findById(data.projectId).exec();

        for (let i = 0; i < data.userArr.length; i++) {
            myProject.userInfo.pull(data.userArr[i]);
        }
        let result = await myProject.save();
        console.log(myProject);
        return result
    }
    if (data.type === "ADD-TASKS") {
        console.log("check data", data);
        let myProject = await Project.findById(data.projectId).exec();
        console.log("myproject", myProject)
        for (let i = 0; i < data.taskArr.length; i++) {
            myProject.tasks.push(data.taskArr[i]);
        }
        let result = await myProject.save();
        console.log(myProject);
        //find project by id

        return result
    }
    return null;
}

const getAllProjectService = async (queryString) => {
    const page = queryString.page;

    const { filter, limit, population } = aqp(queryString);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Project.find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec();
    return result
}

const putUpdateProjectService = async (id, name, endDate, description) => {
    try {
        let result = await Project.updateOne({ id }, { id, name, endDate, description });
        return result;
    } catch (error) {
        console.log("error:", error);
        return null;
    }
}

const deleteProjectService = async (id) => {
    try {
        let result = await Project.deleteOne({ id });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createProjectService, getAllProjectService, putUpdateProjectService, deleteProjectService
}