// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return Math.abs(block - 42)
}

function distanceFromHqInFeet(block){
    return Math.abs(block - 42) * 264   
}

function distanceTravelledInFeet(block1, block2){
    return Math.abs(block1 - block2) * 264 
}

function calculatesFarePrice(start, destination){
    let dist = distanceTravelledInFeet(start,destination)
    if(dist <= 400){
        return 0
    } else if(dist > 400 && dist <= 2000){
        return (dist - 400) * .02
    } else if(dist > 2000 && dist <= 2500){
        return 25
    } else if(dist > 2500){
        return 'cannot travel that far'
    }
}