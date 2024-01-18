const mongoose=require("mongoose");

exports.databaseconnection = async () => {
    const URL = `mongodb://localhost:27017/whatsappclone_data`;
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};
