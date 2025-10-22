const connection = require("../config/database");



const getAllUser = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;

}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]);
    console.log("result:", results)
    return results[0];
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
        SET email = ? , name = ? , city =? 
        WHERE id = ?`,
        [email, name, city, userId],
    );

}

const getDeleteUserById = async (userId) => {
    let [results, fields] = await connection.query('DELETE FROM Users WHERE id=?', [userId]);
}


module.exports = {
    getAllUser, getUserById, updateUserById, getDeleteUserById
}