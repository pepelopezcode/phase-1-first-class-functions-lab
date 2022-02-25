// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    const results = [];
    results.push(drivers[0],drivers[1])
    return results;
    
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
return function fareMultiplier(fare){
   return (num * fare)
}

}
const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, func ){
    return func(drivers)
}