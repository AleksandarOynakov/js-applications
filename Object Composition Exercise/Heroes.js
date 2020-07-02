function create() {
    return {
        mage: function (name) {
            this.name = name;
            this.health = 100;
            this.mana = 100;
            this.cast = function (spell) {
                this.mana--;
                console.log(`${this.name} cast ${spell}`);
            }
            delete this.mage;
            return this;
        },
        fighter: function (name) {
            this.name = name;
            this.health = 100;
            this.stamina = 100;
            this.fight = function () {
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
            }
            delete this.fighter
            return this;
        }
    }
}
