//import expect method from chai 
const {expect} = require('chai');
//create a describe function:
// - tells us whether a ship is positioned at a specific location
describe('Check for ship', () => {
    const {checkForShip} = require('../game_logic/ship_methods');

    it('should correctly report that there is no ship at a players coordinate', () => {
        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        }
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report back if there is a ship located at the given coordinates', () => {
        player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    });

    it('should handle ships located at more than one coordinate', () => {
        player = {
            ships: [
                {locations: [[0, 0], [0, 1]]}
            ]
        };
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should handle checking multiple ships', () => {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                }
            ]
        };
        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [1, 1])).to.be.true;
        expect(checkForShip(player, [1, 0])).to.be.true;
        expect(checkForShip(player, [2, 3])).to.be.true;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });
});

describe('Damage ship', () => {
    const {damageShip} = require('../game_logic/ship_methods');

    it('should register damage on a given ship at a given location', () => {
        const ship = {
            locations: [[0, 0]],
            damage: []
        };
        damageShip(ship, [0, 0]);
        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });
});

describe('fire', () => {
    const {fire} = require('../game_logic/ship_methods');

    it('should record damage on the given players ship at a given coordinate', () => {
        const player = {
            ships: [
                {location: [[0, 0]], damage: []}
            ]
        }
        fire(player, [0, 0]);
        expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
    });
});