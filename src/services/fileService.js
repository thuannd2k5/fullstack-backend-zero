
const uploadSingleFile = async (fileObject) => {
    let uploadPath = __dirname + fileObject.name;
    console.log("dirname : ", __dirname)
    try {
        await fileObject.mv(uploadPath);
        return {
            status: "success",
            path: ' link-image',
            error: null
        }
    } catch (error) {
        return {
            status: "failed",
            path: null,
            error: JSON.stringify(error)
        }
    }

}

const uploadMultipleFile = () => {

}

module.exports = {
    uploadMultipleFile, uploadSingleFile
}