const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image

        });

        return result
    } catch (error) {
        console.log(error)
    }
}

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log("error", error);
        return null;
    }
}

const getAllCustomerService = async () => {
    try {
        let result = await Customer.find();
        return result;
    } catch (error) {
        console.log("error : ", error);
        return null;
    }

}

const putUpdateCustomerService = async (id, email, name, address) => {
    try {
        let result = await Customer.updateOne({ _id: id }, { email, name, address })
        return result;
    } catch (error) {
        console.log("error:", error);
        return null;
    }
}


module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomerService,
    putUpdateCustomerService
}