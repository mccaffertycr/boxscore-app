import { Router } from 'express';
import axios from 'axios';
import Game from './games';

const router = Router();

router.route('/nba').get((req, res) => {
  Game.findOne({ 'data.league': 'NBA' })
    .sort({ createdAt: -1 })
    .then(game => {
      /* Check if a game exists and that it was created in the last 15 seconds, 
      if not refetch data from the provided endpoint and created a new db entry.
      This solution is definitely overly simplistic and created unecessary records,
      in a real world situation we would want to update games that were already stored
      rather than create a new db entry.
      */
      if (
        !game ||
        (new Date(Date.now()).getTime() - new Date(game.createdAt).getTime()) /
          1000 >=
          15
      ) {
        axios
          .get(
            'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json'
          )
          .then(data => {
            const newGame = new Game({ data: data.data });
            newGame.save((err, game) => {
              if (err) return console.log(`Error saving game data: `, err);
              return res.json(game);
            });
          });
      } else res.json(game);
    });
});

router.route('/mlb').get((req, res) => {
  Game.findOne({ 'data.league': 'MLB' })
    .sort({ createdAt: -1 })
    .then(game => {
      if (
        !game ||
        (new Date(Date.now()).getTime() - new Date(game.createdAt).getTime()) /
          1000 >=
          15
      ) {
        axios
          .get(
            'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json'
          )
          .then(data => {
            const newGame = new Game({ data: data.data });
            newGame.save((err, game) => {
              if (err) return console.log(`Error saving game data: `, err);
              return res.json(game);
            });
          });
      } else res.json(game);
    });
});

export default router;
