const { createProjectService, getAllProjectService } = require("../services/productService");


const postCreateProjectApi = async (req, res) => {
    let result = await createProjectService(req.body);
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const getAllProjectApi = async (req, res) => {
    let result = await getAllProjectService(req.query);
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

module.exports = {
    postCreateProjectApi, getAllProjectApi
}