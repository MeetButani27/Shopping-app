const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        f_name: {
            type: String,
            required: true
        },
        l_name: {
            type: String,
            required: true
        },
        email_id: {
            type: String,
            required: true
        },
        mobile_no: {
            type: Number,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        re_password: {
            type: String,
            required: true
        }
    },
    {
        collection: "users",
    }
);

const usermodel = mongoose.model("users", UserSchema);
module.exports = usermodel;
