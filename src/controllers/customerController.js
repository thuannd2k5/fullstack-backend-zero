const { createCustomerService, createArrayCustomerService, getAllCustomerService, putUpdateCustomerService, deleteCustomerService, deleteArrayCustomerService } = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");
const Joi = require('joi');


module.exports = {
    postCreateCustomerApi: async (req, res) => {
        let { name, address, phone, email, description } = req.body;

        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            address: Joi.string(),
            phone: Joi.string().pattern(new RegExp('^[0-9]{8,10}$')),
            email: Joi.string().email(),
            description: Joi.string(),

        })
        let { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            // return error
            return res.status(200).json({
                msg: error
            })
        } else {
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
        }
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


        let limit = req.query.limit;
        let page = req.query.page;
        let name = req.query.name;
        let result = null;
        if (limit && page) {
            result = await getAllCustomerService(limit, page, name, req.query);
        } else
            result = await getAllCustomerService();
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
    },
    deleteArrayCustomerApi: async (req, res) => {
        let ids = req.body.customerId;
        let result = await deleteArrayCustomerService(ids);
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    },
}

