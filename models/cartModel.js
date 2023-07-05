const { ObjectId } = require('mongodb');
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "User"
    },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    color: {
        type: ObjectId,
        ref: "Color"
    }
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Cart', cartSchema);