const { createProjectService, getAllProjectService, putUpdateProjectService, deleteProjectService } = require("../services/productService");


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

const putUpdateProjectApi = async (req, res) => {
    let { id, name, endDate, description } = req.body;

    let result = await putUpdateProjectService(id, name, endDate, description);
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const deleteProjectApi = async () => {
    let { id } = req.body;
    let result = await deleteProjectService(id);
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

module.exports = {
    postCreateProjectApi, getAllProjectApi, putUpdateProjectApi, deleteProjectApi
}