import {NextFunction, Request, Response} from 'express';
import RoomManager from '../game';
import Player from '../game/player';

const player = new Player('tester'); // mock player

const createRoom = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.name) {
        return res.send({error: 'No name!!'}).status(400);
    }
    const player = new Player(req.body.name);
    const roomID = RoomManager.createRoom(player);
    return res.send({id: roomID});
};

export default createRoom;
