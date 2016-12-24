var axios = require('axios');
const APIKey = '567df1aee57e69767a2d594dad86c4fe';

const OpenWeatherMapURL = `http://api.openweathermap.org/data/2.5/weather?&appid=${APIKey}&units=metric`;
module.exports = {
  getTemp: function (location) {
    // this is very important
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OpenWeatherMapURL}&q=${encodedLocation}`;

    return axios
              .get(requestURL)
              .then(function (res) {
                console.log(res);
                if(res.data.cod && res.data.message) {
                  throw new Error(res.data.message);
                } else {
                  return res.data.main.temp;
                }
              }, function (rej) {
                // debugger;
                // throw new Error(rej.response.data.message);
                throw new Error('Unable to fetch weather for that Location Provided!')
              });

  }
}


// in Browser some characters can convert into Other Characters
