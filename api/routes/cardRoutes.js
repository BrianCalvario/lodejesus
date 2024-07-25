import { Router } from "express";
import Card from "../models/CardModel.js";
const cardRouter = Router();

cardRouter.post('/', async (req, res) => {
  try {
    const newCard = new Card(req.body);
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

cardRouter.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

cardRouter.delete('/:id', async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Tarjeta eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default cardRouter;
