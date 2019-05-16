import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  data: {},
  createdAt: { type: Date, required: true, default: Date.now },
});

const Game = mongoose.model('game', GameSchema);

export default Game;
