import {NextFunction, Request, Response} from 'express';
import RoomManager from '../game';
import Player from '../game/player';

const player = new Player('tester'); // mock player

const roomInfo = async (req: Request, res: Response, next: NextFunction) => {
    const info = RoomManager.info();
    return res.send(info);
};

export default roomInfo;
