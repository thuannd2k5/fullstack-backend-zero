const { createCustomerService, createArrayCustomerService, getAllCustomerService, putUpdateCustomerService, deleteCustomerService } = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");

module.exports = {
    postCreateCustomerApi: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imageUrl = "";


        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl

        }
        let customer = await createCustomerService(customerData);

        return res.status(200).json({
            errorCode: 0,
            data: customer
        })
    },

    postCreateArrayCustomerApi: async (req, res) => {
        let customer = await createArrayCustomerService(req.body.customers);
        if (customer) {
            return res.status(200).json({
                errorCode: 0,
                data: customer
            })
        } else {
            return res.status(200).json({
                errorCode: -1,
                data: null
            })
        }
    },
    getAllCustomerApi: async (req, res) => {
        let result = await getAllCustomerService();
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    },
    putUpdateCustomerApi: async (req, res) => {
        let { id, name, email, address } = req.body;

        let customer = await putUpdateCustomerService(id, name, email, address);
        return res.status(200).json({
            errorCode: 0,
            data: customer
        })
    },
    deleteCustomerApi: async (req, res) => {
        let id = req.body.id;
        let result = await deleteCustomerService(id);
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    }
}

