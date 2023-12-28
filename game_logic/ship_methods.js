function checkForShip(player, coordinates) {
  var ship, shipPresent;
  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];
    shipPresent = ship.locations.filter((actualCoordiante) => {
      return (
        actualCoordiante[0] === coordinates[0] &&
        actualCoordiante[1] === coordinates[1]
      );
    })[0];
    if (shipPresent) return ship;
  }
  return false;
}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);
}

function fire(player, coordinates) {
  var ship = checkForShip(player, coordinates);
  if (ship) {
    damageShip(ship, coordinates);
  }
}
module.exports = { checkForShip, damageShip, fire };
