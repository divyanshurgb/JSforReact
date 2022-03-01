// const fetchPost = async () => {
//     try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const result = await res.json
//     console.log(result)
// }   
// catch(err) {
//     console.log(err)
// }
// }

// Styling console.log //
// function Print(text) {
//     console.log(`%c ${text}`, 'color: orange')
// }

class Bike {
        constructor(color, mspeed) {
            this.color = "red"
            this.maxspeed = mspeed
        }

        itro () {
            Print(`Bike color is ${this.color} and max speed is ${this.maxspeed} airbag is ${this.airbag}`)
        }
}

class Car extends Bike {
    constructor(color, mspeed) {
        super(color, mspeed)
        this.airbag = airbag
    }
    
}

const bullet = new Bike("red", 120);
const avenger = new Bike("black", 123);


const maruti = new Car("white", 150, true);

const i20 = new Car("yellow", 123, false);

maruti.intro()
Print(i20.airbag)
Print(maruti.airbag)
// Print(bullet.color);
// const maruti = new Car()
// bullet.itro()
// avenger.itro()
// Print('hello world !!')

// console.log('%cI am ramesh and %cmystatus is coder', 'color: orange', 'background: green')

// Class and Inheritance // // 

// const bullet = {
//     color: "red", 
//     maxspeed: 110, 
//     itro: () => {
//         Print(`Bullet bike in ${this.color} and max speed ${this.maxspeed} kmph`)
//     }
// }

// const avenger = {
//     color: "black", 
//     maxspeed: 120, 
//     itro: () => {
//         Print(`Avenger bike in ${this.color} and max speed ${this.maxspeed} kmph`)
//     }
// }

