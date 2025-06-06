
function averageThreeNumbers(x,y,z){
    let sum = x+y+z;
    let average = sum/3
    return average;
}

function createSentence(num,noun) {
    let ner = num.toString();
    return "On average, a Berkeley student has " +ner + " " + noun +'s';
}

function getRandomNum(max){
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x,y,z);

let sentence = createSentence(avg,'cheetah')

console.log(sentence)