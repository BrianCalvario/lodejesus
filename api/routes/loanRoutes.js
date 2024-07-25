import { Router } from 'express';
import Loan from "../models/LoanModel.js";
const loanRouter = Router();

loanRouter.post('/', async (req, res) => {
  try {
    const newLoan = new Loan(req.body);
    await newLoan.save();
    res.status(201).json(newLoan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

loanRouter.get('/', async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default loanRouter;
