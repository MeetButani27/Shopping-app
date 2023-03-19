const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        item_id: String,
        item_name: String,
        price: String,
        rating: String,
        category: String
    },
    {
        collection: "items"
    }
)

mongoose.model('items', ItemSchema);