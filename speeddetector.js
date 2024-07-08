function speedDetector (speed){
    const speedLimit =70;
    const kmPerDemerit =5;
    if (speed < speedLimit){
        return "OK"
    }else{
        const demeritPoints = Math.floor((speed - speedLimit)/kmPerDemerit)
    if(demeritPoints>12){
        return "License suspended"
    }else{
        return `Points: ${demeritPoints}`
    }
    }
}

console.log(speedDetector(20));
console.log(speedDetector(190));