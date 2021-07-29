import mongoose from "mongoose";
const cateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});
module.exports = mongoose.model('Category', cateSchema);