// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    return function (x) {
        return x * x;
    }
}

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function (createFareMultiplier) {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}