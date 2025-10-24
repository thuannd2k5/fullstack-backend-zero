const { createCustomerService } = require("../services/customerService");
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
    }
}

