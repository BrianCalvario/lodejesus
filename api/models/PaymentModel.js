import { Schema, model } from "mongoose";

const paymentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    loanId: { type: Schema.Types.ObjectId, ref: 'loans', required: true },
    amount: { type: Number, required: true },
    numberPayment: { type: Number, required: true },
}, { timestamps: true });

const Payment = model('payments', paymentSchema);

export default Payment;
