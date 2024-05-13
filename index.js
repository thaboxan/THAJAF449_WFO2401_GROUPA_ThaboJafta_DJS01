/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)
const fuelRemaining = 5000; // remaining fuel (kg)

const values = {
  velocity: initialVelocity,
  acceleration: acceleration,
  time: timeInSeconds,
};
const distanceNew = distance + velocity * timeInSeconds; //calcultes new distance
fuelRemaining = fuelBurnRate * timeInSeconds; //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (values) => {
  if (!quantities)
    throw new Error('"quantities" is required to calc final velocity');
  const { velocity, acceleration, time } = quantities;
  if (!velocity) throw new Error('"velocity" is required to calc final speed');
  if (!acceleration)
    throw new Error('"constant acceleration" is required to calc final speed');
  if (!time) throw new Error('"time" is required to calc final speed');
  const timeInHours = time / 3600;
  const accelerationInKmPerHour = acceleration * 12960;
  return velocity + accelerationInKmPerHour * timeInHours;
};

//calculates new velocity based on acceleration
const velocityNew = calcNewVel(values);

console.log(`Corrected New Velocity: ${velocityNew} km/h`);
console.log(`Corrected New Distance: ${distanceNew} km`);
console.log(`Corrected Remaining Fuel: ${fuelRemaining} kg`);
