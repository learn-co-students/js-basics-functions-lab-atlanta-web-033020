// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  const diff = 42 - value;
   return Math.abs(diff);
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function differenceInBlocks(startingValue, endingValue) {
  return Math.abs(startingValue - endingValue);
}

function distanceTravelledInFeet(startingValue, endingValue) {
  return differenceInBlocks(startingValue, endingValue) * 264;
}

function calculatesFarePrice(startingValue, endingValue) {
   let diffFeet = distanceTravelledInFeet(startingValue, endingValue);
  if (diffFeet <= 400) {
    return 0;
  } else if (diffFeet > 400 && diffFeet <= 2000) {
      return (diffFeet - 400) * 0.02; 
    } else if (diffFeet > 2000 && diffFeet <= 2500) {
      return 25;
      } else if (diffFeet > 2500) {
        return "cannot travel that far"
        }
}
  
console.log("something went wrong")
