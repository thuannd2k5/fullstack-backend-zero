const mongoose = require('mongoose');
require('dotenv').config()

const dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];


const connection = async () => {
    // Or:
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27018/?authSource=admin');
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
    } catch (error) {
        console.log(">>> Error connection DB : ", error)
    }
}

module.exports = connection;