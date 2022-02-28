const bioData = {
        name : "vinod",
        age : 26,
        deg : 'MCS',
        hobb: {
            first: 'playing',
            sec: 'youtube videos'
        }
    }

let {name: myname, age: ages, deg, hobb} = bioData;  // deg = 26, age = MCS

console.log(`my name is ${myname}. My age is ${ages} and My highest qual. is ${deg}. I love making ${hobb.sec}`);
