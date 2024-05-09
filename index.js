/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmPerHr = 10000; // velocity (km/h)
const accelerationMetersPerSecSq = 3; // acceleration (m/s^2)
const timeSec = 3600; // seconds (1 hour)
const distanceKm = 0; // distance (km)
const remainingFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSec = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity (km/h) based on acceleration and time
const calcNewVelocity = (initialVelocity, acceleration, time) => { 
  // Convert velocity from km/h to m/s
  const initialVelocityMetersPerSec = initialVelocity * (1000 / 3600);
  // Calculate new velocity in m/s
  const newVelocityMetersPerSec = initialVelocityMetersPerSec + (acceleration * time);
  // Convert new velocity from m/s to km/h
  const newVelocityKmPerHr = newVelocityMetersPerSec * (3600 / 1000);
  return newVelocityKmPerHr;
}

// Calculate new velocity
// Ad a try catch mehod to catch any errors 
try {


const newVelocityKmPerHr = calcNewVelocity(velocityKmPerHr, accelerationMetersPerSecSq, timeSec);

// Calculate new distance
const newDistanceKm = distanceKm + (velocityKmPerHr * (timeSec / 3600));

// Calculate remaining fuel
const newRemainingFuelKg = remainingFuelKg - (fuelBurnRateKgPerSec * timeSec);

console.log(`Corrected New Velocity: Approximately ${newVelocityKmPerHr.toFixed(0)} km/h`);
console.log(`Corrected New Distance: Approximately ${newDistanceKm.toFixed(0)} km`);
console.log(`Corrected Remaining Fuel: Approximately ${newRemainingFuelKg.toFixed(0)} kg`);

} catch (error) {
  console.error('An error occurred:', error.message);
}





