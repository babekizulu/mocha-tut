const checkForShip = (player, coordinates) => {
    let shipPresent,ship;
    for(let i = 0 ; i < player.ships.length ; i++) {
        ship = player.ships[i];

        shipPresent = ship.locations.filter((actualCoordinate) => {
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
        })[0];

        if(shipPresent) {
            return ship;
        }
    };
    return false;
};

const damageShip = (ship, coordinates, damagePoints) => {
    ship.damage.push(coordinates);
    damagePoints += 1;
};

const fire = (player, coordinates) => {
    const ship = checkForShip(player, coordinates);

    if(ship) {
        damageShip(ship, coordinates);
    };
};

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;