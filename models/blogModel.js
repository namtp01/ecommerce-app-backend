const mongoose = require('mongoose'); // Erase if already required
const { ObjectId } = require('mongodb');
// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    numViews:{
        type:Number,
        default: 0
    },
    isLiked: {
        type: Boolean,
        default: false
    },
    isDisliked: {
        type: Boolean,
        default: false
    },
    likes: [{
        type:ObjectId,
        ref:"User",
    }],
    dislikes: [{
        type:ObjectId,
        ref:"User"
    }],
    images: [],
    author: {
        type:String,
        default:"Admin"
    }
}, {
    toJSON: {
        virtuals:true,
    }, 
    toObject: {
        virtuals:true
    },
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);