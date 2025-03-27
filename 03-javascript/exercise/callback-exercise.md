# Callback and Promise Exercises

## Instructions

### Exercise 1: Convert to Promises
Convert the callback-based function to use Promises instead.

### Exercise 2: Use Promise Syntax
Use your promise-based function to fetch weather for a city using then-based promise syntax.

### Exercise 3: Use Async/Await
Use your promise-based function to fetch weather for a city using async/await syntax.

## Original Callback Function

```javascript
function getWeatherData(city, callback) {
  const weatherData = {
    'NewYork': 'Sunny',
    'Montreal': 'Cloudy',
    'Toronto': 'Cloudy'
  }
  setTimeout(() => {
    if (weatherData[city]) {
      callback(null, weatherData[city])
    } else {
      callback(new Error('Failed to load weatherData'))
    }
  }, 2000)
}
```