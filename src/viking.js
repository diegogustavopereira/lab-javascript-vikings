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
                
        let ivk = Math.floor(this.vikingArmy.length * Math.random());
        let isax = Math.floor(this.saxonArmy.length * Math.random());;

        let vk = this.vikingArmy[ivk];
        let sax = this.saxonArmy[isax];

        let str2 = vk.strength;

        const msg = saxon.receiveDamage(str2)
        
        if (sax.health <= 0){
            this.sax.splice(sax, 1);
        }
    
        return msg;
        
    }

    
    saxonAttack(){

    }

    showStatus(){

    }

    

}