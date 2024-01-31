import {NextFunction, Request, Response} from 'express';
import RoomManager from '../game';
import Player from '../game/player';

const player = new Player('tester2'); // mock player

const joinRoom = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.name || !req.body.roomID) {
        res.statusMessage = 'No name and/or room ID!!';
        res.status(400).end();
        return;
    }
    const player = new Player(req.body.name);
    RoomManager.joinRoom(req.body.roomID, player);
    return res.send({id: req.body.roomID});
};

export default joinRoom;
