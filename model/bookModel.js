import mongoose from "mongoose";
const {
    ObjectId
} = mongoose.Schema;
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    author: {
        type: String
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    }

}, {
    timestamps: true
});
module.exports = mongoose.model('Book', bookSchema);