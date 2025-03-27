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

function getWeatherDataPromised(city) {
    return new Promise((resolve, reject) => {
        getWeatherData(city, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

getWeatherData('NewYork', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

getWeatherDataPromised('NewYork').then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})

// Async/await example needs to be inside an async function
async function getWeatherAsync() {
    try {
        const data = await getWeatherDataPromised('NewYork')
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

// Execute the async function
getWeatherAsync();