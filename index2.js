const { nextISSTimesForMyLocation } = require("./iss_promised");

// fetchMyIP().then((ip) => {
//   fetchCoordsByIP(ip);
// });

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then((body) => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes);
  })
  .catch((error) => {
    console.log("it didn't work: ", error.message);
  });
