//region Hidden
type Building = 1 | 2;
type Room = 107 | 108 | 109;
type RoomID = `FIK${Building}-${Room}`;
//endregion

function searchRoomInFIK(roomId: string) {
    console.log("Room found.");
}

// TODO: Call searchRoom with arbitrary string
// TODO: Convert searchRoom's argument to use template literal type
