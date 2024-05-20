const results = await Promise.all(resultingPromises);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;