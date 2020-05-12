// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let blocks;
    if (location >= 42) {
        blocks = location - 42;
    } else {
        blocks = 42 - location
    }
    return blocks
}

function distanceFromHqInFeet(location) {
    let feet = distanceFromHqInBlocks(location) * 264;
    return feet
}

function distanceTravelledInFeet(start, finish) {
    let distance = Math.abs(start - finish)
    distance = distance * 264
    return distance
}

function calculatesFarePrice(start, destination) {
    let cost;
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        cost = 0
    } else if (distance > 400 && distance <= 2000) {
        distance = distance - 400
        cost = distance * 0.02
    } else if (distance > 2000 && distance <= 2500) {
        cost = 25
    } else {
        return "cannot travel that far"
    }
    return cost
}