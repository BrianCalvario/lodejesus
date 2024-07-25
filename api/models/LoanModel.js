import { Schema, model } from "mongoose";

const loanSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    loanType: { type: String, required: true }, //personal, mortgage, student
    amount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    numberPayments: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, required: true },
}, { timestamps: true });

const Loan = model('loans', loanSchema);

export default Loan;
