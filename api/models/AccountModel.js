import { Schema, model } from "mongoose";

const accountSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    accountNumber: { type: String, required: true, unique: true },
    accountType: { type: String, required: true }, //savings, checking
    balance: { type: Number, required: true },
}, { timestamps: true });

const Account = model('accounts', accountSchema);

export default Account;
