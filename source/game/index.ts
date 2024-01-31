import Player from './player';
import GameRoom from './room';

class RoomManager {
    activeRooms: Array<GameRoom>;

    constructor() {
        this.activeRooms = [];
        console.log('Room manager created');

        //create mock players and room
        const player1 = new Player('Tester1');
        const player2 = new Player('Tester1');
        const roomID = this.createRoom(player1);
        this.joinRoom(roomID, player2);
    }

    createRoom(player: Player) {
        const room = new GameRoom(player);
        this.activeRooms.push(room);
        return room.id;
    }

    getRoom(id: string) {
        return this.activeRooms.find(room => room.id === id);
    }

    joinRoom(id: string, player: Player) {
        const room = this.activeRooms.find(room => room.id === id);
        room?.lobby.push(player);
    }

    info() {
        return JSON.stringify(this.activeRooms);
    }
}
const roomManager = new RoomManager();

export default roomManager;
