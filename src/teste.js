// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    } 
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;

    };

      
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else{
            return `${this.name} has died in act of combat`;
        }
      }

    battleCry() {
        return "Odin Owns You All!";

    } 

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
    super(health, strength);    

    };

    receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else{
        return `A Saxon has died in combat`;
    }

    };


}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(vikingObject){
       this.vikingArmy.push(vikingObject);

    }

    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject);

    }

    vikingAttack(){
                
        let vk = escolha(this.vikingArmy);
        let sax = escolha(this.saxonArmy);

        let viking = this.vikingArmy[vk];
        let saxon = this.saxonArmy[sax];

        let msg = Saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0){
            this.saxonArmy.splice(sax, 1);
        }

        return msg;

    }

    saxonAttack(){

    }

    showStatus(){

    }

    

}



let a = new Viking('Harald', 150, 300);
console.log(a);
let b = new Saxon(60, 25);
console.log(b);

war.addViking(a);
war.addSaxon(b);


console.log(vikingArmy);
console.log(saxonArmy);
