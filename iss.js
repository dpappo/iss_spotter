const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function (callback) {
  request(
    "https://api.ipify.org/?format=json",
    function (error, response, body) {
      if (error) {
        callback(error, null);
        return;
      }
      // if non-200 status, assume server error
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }

      let IPJSON = JSON.parse(body);
      let IP = IPJSON.ip;
      // console.log(IP);
      callback(error, IP);
    }
  );
};

const fetchCoordsByIP = function (ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, function (error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    let geoIP = JSON.parse(body);
    let latitude = geoIP.latitude;
    let longitude = geoIP.longitude;
    // console.log("latitude: ", latitude, "longitude: ", longitude);
    let objectLatLong = { latitude, longitude };
    callback(error, objectLatLong);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
