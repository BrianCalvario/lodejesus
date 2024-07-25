import { Schema, model } from "mongoose";

const cardSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref:'users', required: true },
    accountId: { type: Schema.Types.ObjectId, ref:'accounts', required: true },
    cardNumber: { type: String, required: true, unique: true },
    cardType: { type: String, required: true }, //credit, debit
    expirationDate: { type: Date, required: true },
    securityCode: { type: String, required: true },
    status: { type: String, default:'active' }, //active, blocked
}, { timestamps: true });

const Card = model('cards', cardSchema);

export default Card;
