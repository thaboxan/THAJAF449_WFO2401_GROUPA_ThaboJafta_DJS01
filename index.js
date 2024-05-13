// This function calculates the new velocity of a moving object given its initial velocity, acceleration, and time.
const calcNewVel = ({ vel, acc, time }) => {
  const velInMps = (vel * 1000) / 3600; // Convert velocity from km/h to m/s
  const newVelInMps = velInMps + acc * time; // Calculate new velocity in m/s
  return (newVelInMps * 3600) / 1000; // Convert new velocity back to km/h for output
};

try {
  // Initial parameters for the moving object
  const initialParams = {
    vel: 10000, // Initial velocity in km/h
    acc: 3, // Acceleration in m/s^2
    time: 3600, // Time in seconds
    d: 0, // Initial distance covered in km
    fuel: 5000, // Initial fuel in kg
    fbr: 0.5, // Fuel burn rate in kg/s
  };

  // Calculate the new velocity using the initial parameters
  const vel2 = calcNewVel(initialParams);

  // Calculate the new distance covered
  const d2 = initialParams.d + (initialParams.vel * initialParams.time) / 3600;

  // Calculate the remaining fuel
  const rf = initialParams.fuel - initialParams.fbr * initialParams.time;

  // Log the new velocity, distance covered, and remaining fuel
  console.log(`Corrected New Velocity: ${vel2} km/h`);
  console.log(`Corrected New Distance: ${d2} km`);
  console.log(`Corrected Remaining Fuel: ${rf} kg`);
} catch (error) {
  // Log any errors that occur during execution
  console.error("An error occurred:", error);
}
