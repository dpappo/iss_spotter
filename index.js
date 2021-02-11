const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("99.228.116.112", (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returning coordinates: ", data);
// });

fetchISSFlyOverTimes(
  { latitude: 43.8137, longitude: -79.4532 },
  (error, data) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    console.log("It worked! Returning responses: ", data);
  }
);
