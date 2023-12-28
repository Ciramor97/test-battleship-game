# TOC

- [Mocha](#mocha)
- [checkForShip](#checkforship)
- [damageShip](#damageship)
- [fire](#fire)
  <a name=""></a>

<a name="mocha"></a>

# Mocha

it should run our tests using npm.

```js
expect(true).to.be.ok;
```

<a name="checkforship"></a>

# checkForShip

Should correctly report no ship at a given players coordinate.

```js
// expect(true).to.be.ok;
expect(checkForShip(player, [9, 9])).to.be.false;
```

Should correctly report a ship located at a given players coordinate.

```js
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
```

Should correctly handle ships located at more than one player coordinate.

```js
expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [9, 9])).to.be.false;
```

Should handle checking multiple ships.

```js
expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
expect(checkForShip(player, [9, 9])).to.be.false;
```

<a name="damageship"></a>

# damageShip

should register damage on a given ship at a given location.

```js
var ship = {
  locations: [[0, 0]],
  damage: [],
};
damageShip(ship, [0, 0]);
expect(ship.damage).to.not.be.empty;
expect(ship.damage[0]).to.deep.equal([0, 0]);
```

<a name="fire"></a>

# fire

should record damage on the given players ship at a given coordinate.

```js
fire(player, [0, 0]);
expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
```

should NOT record damage if there is no ship at my coordinates.

```js
// var player = {
//   ships: [
//     {
//       locations: [[9, 9]],
//       damage: [],
//     },
//   ],
// };
fire(player, [9, 9]);
expect(player.ships[0].damage).to.be.empty;
```
