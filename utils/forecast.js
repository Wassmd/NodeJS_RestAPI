const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+ longitude + '&appid=c308ccf01e124e4451d30cb70dfdcc85&units=metric'
    console.log('url:'+url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            callback(undefined, body)
        }
    })
}

module.exports = forecast