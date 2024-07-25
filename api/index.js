import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://jsalazar:Y7KhmP44RouNEpos@utmabank.bmrwcw1.mongodb.net/utmaBank', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Data Base Connected");
});

app.get('/', (req, res) => {
  res.send('Backend is running');
});
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);
app.use('/cards', cardRoutes);
app.use('/loans', loanRoutes);
app.use('/payments', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});