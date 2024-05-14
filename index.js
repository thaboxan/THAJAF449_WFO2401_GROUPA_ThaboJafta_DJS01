// This function calculates the new velocity of a moving object given its initial velocity, acceleration, and time.
const calculateNewVelocity = ({ initialVelocity, acceleration, time }) => {
  const initialVelocityInMps = (initialVelocity * 1000) / 3600; // Convert velocity from km/h to m/s
  const newVelocityInMps = initialVelocityInMps + acceleration * time; // Calculate new velocity in m/s
  return (newVelocityInMps * 3600) / 1000; // Convert new velocity back to km/h for output
};

try {
  // Initial parameters for the moving object
  const initialParameters = {
    initialVelocity: 10000, // Initial velocity in km/h
    acceleration: 3, // Acceleration in m/s^2
    time: 3600, // Time in seconds
    initialDistance: 0, // Initial distance covered in km
    initialFuel: 5000, // Initial fuel in kg
    fuelBurnRate: 0.5, // Fuel burn rate in kg/s
  };

  // Calculate the new velocity using the initial parameters
  const newVelocity = calculateNewVelocity(initialParameters);

  // Calculate the new distance covered
  const newDistance =
    initialParameters.initialDistance +
    (initialParameters.initialVelocity * initialParameters.time) / 3600;

  // Calculate the remaining fuel
  const remainingFuel =
    initialParameters.initialFuel -
    initialParameters.fuelBurnRate * initialParameters.time;

  // Log the new velocity, distance covered, and remaining fuel
  console.log(`New Velocity: ${newVelocity} km/h`);
  console.log(`New Distance: ${newDistance} km`);
  console.log(`Remaining Fuel: ${remainingFuel} kg`);
} catch (error) {
  // Log any errors that occur during execution
  console.error("An error occurred:", error);
}
