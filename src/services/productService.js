const Project = require("../models/project");


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
    return null;
}

module.exports = {
    createProjectService
}