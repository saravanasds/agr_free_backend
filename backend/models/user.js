import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    adhaarNumber: { type: String, required: true, unique: true },
    district: { type: String, required: true },
    constituency: { type: String, required: true },
    address: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
