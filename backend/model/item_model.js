const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
    {
        item_id: {
            type: String,
            required: true,
            unique: true,
        },
        item_name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        item_url: {
            type: String,
            required: true,
        },
    },
    {
        collection: "items",
    }
);

const itemmodel = mongoose.model("items", ItemSchema);
module.exports = itemmodel;
