// --> Using Constructor functions
function personCon(fullName, money, sleepMood, healthRate)
    {
         this.fullName = fullName;
         this.money = money;
         this.sleepMood = sleepMood;
         this.healthRate = healthRate;
    }

personCon.prototype.sleep = function(hours)
    {
       if (hours === 7) {
           this.sleepMood = 'Happy';
       } else if (hours < 7) {
           this.sleepMood = 'Tired';
       } else {
           this.sleepMood = 'Lazy';
       }   
    }

personCon.prototype.eat = function(meals) 
    {
       if (meals === 3) {
         this.healthRate = 100;
       } else if (meals === 2) {
           this.healthRate = 75;
       } else if (meals === 1) {
           this.healthRate = 50;
       }
    }

personCon.prototype.buy = function(items)
    {
        this.money -= items * 10;
    }

const person1 = new personCon('Menna Ashraf', 70, 'Tired', 75);
 person1.sleep(5);
 person1.eat(2);
 person1.buy(2);
 console.log(person1);



// --> Using Classes
class personClass
{
    constructor(fullName, money, sleepMood, healthRate)
    {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    sleep(hours) 
    {
        if (hours === 7) {
            this.sleepMood = 'Happy';
        } else if (hours < 7) {
            this.sleepMood = 'Tired';
        } else {
            this.sleepMood = 'Lazy';
        }
    }

    eat(meals) 
    {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    }

    buy(items) 
    {
        this.money -= items * 10;
    }
}

const person2 = new personClass('Sara Ahmed', 150, 'happy', 90);
person2.sleep(8);
person2.eat(3);
person2.buy(1);
console.log(person2);



// --> Using Objects Linking to Other Objects (OLOO)
const personOb = {
    init(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
        return this;
    },

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'Happy';
        } else if (hours < 7) {
            this.sleepMood = 'Tired';
        } else {
            this.sleepMood = 'Lazy';
        }
    },

    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    },

    buy(items) {
        this.money -= items * 10;
    }
};

const person3 = Object.create(personOb).init('Ahmed Mokhtar', 80, 'Happy', 80);
person3.sleep(7);
person3.eat(1);
person3.buy(3);
console.log(person3);



// --> Using Factory functions
function createPersonFactory(fullName, money, sleepMood, healthRate) {
    return {
        fullName,
        money,
        sleepMood,
        healthRate,

        sleep(hours) {
            if (hours === 7) {
                this.sleepMood = 'Happy';
            } else if (hours < 7) {
                this.sleepMood = 'Tired';
            } else {
                this.sleepMood = 'Lazy';
            }
        },

        eat(meals) {
            if (meals === 3) {
                this.healthRate = 100;
            } else if (meals === 2) {
                this.healthRate = 75;
            } else if (meals === 1) {
                this.healthRate = 50;
            }
        },

        buy(items) {
            this.money -= items * 10;
        }
    };
}

const person4 = createPersonFactory('Lara Ahmed', 120, 'Happy', 95);
person4.sleep(6);
person4.eat(2);
person4.buy(2);
console.log(person4);