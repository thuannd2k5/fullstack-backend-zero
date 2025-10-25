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

const getAllCustomerService = async (limit, page, name) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            if (name) {
                result = await Customer.find(
                    { "name": { $regex: '.*' + name + '.*' } }
                ).skip(offset).limit(limit).exec();
            } else
                result = await Customer.find({}).skip(offset).limit(limit).exec();
        } else {
            result = await Customer.find({});
        }
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
const deleteCustomerService = async (id) => {

    try {
        let result = await Customer.deleteById({ _id: id });
        return result;
    } catch (error) {
        console.log("error:", error);
        return null;
    }
}

const deleteArrayCustomerService = async (ids) => {
    try {
        let result = await Customer.delete({ _id: { $in: ids } });
        return result;
    } catch (error) {
        console.log("error:", error);
        return null;
    }
}


module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomerService,
    putUpdateCustomerService, deleteCustomerService, deleteArrayCustomerService
}