function distanceFromHqInBlocks(block){
    let hq = 42;
    let distance;
    distance = Math.abs((block -= hq));
    return distance;
}

function distanceFromHqInFeet(block){
    let distance;
    distance = distanceFromHqInBlocks(block) * 264;
    return distance;
}

function distanceTravelledInFeet(block1, block2){
    let distance;
    distance = Math.abs((block1 -= block2)) * 264;
    return distance;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    let result;
    if (distance < 400){
      return result = 0; 
    }
    else if (distance > 400 && distance < 2000){
      return result = (distance -= 400) * .02; 
    }
    else if (distance > 2000 && distance <= 2500){
      return result = 25;
    }
    else if (distance > 2500){
      return result = "cannot travel that far";
    }
}