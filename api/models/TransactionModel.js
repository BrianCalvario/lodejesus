import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
    accountFromId: { type: Schema.Types.ObjectId, ref: 'accounts', required: true },
    accountToId: { type: Schema.Types.ObjectId, ref: 'accounts', required: true },
    type: { type: String, required: true }, //deposit, withdrawal, transfer
    amount: { type: Number, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

const Transaction = model('transactions', transactionSchema);

export default Transaction;
