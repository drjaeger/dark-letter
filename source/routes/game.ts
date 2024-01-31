import express from 'express';
import createRoom from '../controllers/create.controller';
import joinRoom from '../controllers/join.controller';
import roomInfo from '../controllers/info.controller';
import path from 'path';
import RoomManager from '../game';

const router = express.Router();

router.post('/create', createRoom);

router.post('/join', joinRoom);

router.post('/start', async (req, res, next) => {
    if (!req.body.roomID) {
        res.statusMessage = 'No room ID!!';
        res.status(400).end();
        return;
    }

    const myRoom = RoomManager.getRoom(req.body.roomID);
    myRoom?.start();
    return res.send({id: req.body.roomID});
});

router.post('/playCard', async (req, res, next) => {
    if (!req.body.playerID || !req.body.roomID) {
        res.statusMessage = 'No player id or card id!!';
        res.status(400).end();
        return;
    }
    const {playerID, roomID, card} = req.body;
    const myRoom = RoomManager.getRoom(roomID);
    myRoom?.playCard(playerID, card);
    return res.send({id: roomID});
});

router.get('/info', roomInfo);
router.get('/game-list', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/game-list.html'));
});

router.get('/game-ui', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/game.html'));
});

export default router;
