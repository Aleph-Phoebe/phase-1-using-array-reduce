const batteryBatches = [2, 7, 5, 4, 6, 6, 1];

// Code your solution here

const totalBatteries = batteryBatches.reduce((accumulator,currentValue) => {
  return accumulator + currentValue;}, 0);

console.log(totalBatteries);

