import {DUBLIN_OFFICE, CUSTOMER_INVITE_RANGE, EARTH_RADIUS} from "./src/ultils/Constants";
import {degreeToRadian, distanceBetweenTwoPointByKm} from "./src/helpers/FunctionHelper";
import {INPUT_DATA_PATH, OUTPUT_DATA_PATH} from "./src/gateway/DataSource";
import {introString} from "./src/helpers/StringHelper";
import {readData, writeData} from "./src/helpers/DataHelper";

// Format Dublin location to radian
const dublin = {
  ...DUBLIN_OFFICE,
  latitude: degreeToRadian(DUBLIN_OFFICE.latitude),
  longitude: degreeToRadian(DUBLIN_OFFICE.longitude)
};

// Show the introduction of the program.
console.log(introString(INPUT_DATA_PATH));

// Running program by read the input data
readData(INPUT_DATA_PATH)
  .then((customers) => {
    const result = customers
      .map((user) => ({
        ...user,
        latitude: degreeToRadian(user.latitude),
        longitude: degreeToRadian(user.longitude)
      }))
      .filter((user) => distanceBetweenTwoPointByKm(user, dublin, EARTH_RADIUS) < CUSTOMER_INVITE_RANGE)
      .sort((pre, next) => pre.user_id - next.user_id)
      .map((user) => ({name: user.name, user_id: user.user_id}));


    // Write the data result to the file txt
    writeData(OUTPUT_DATA_PATH, result)
      .then(status => {
        console.log(status);
        console.log("\n\n\t\tThe result !!!");
        console.table(result);
      })
      .catch((e) => {
        console.log('Error at write data:', e.message);
      });

  })
  .catch((e) => {
    console.log('Error at read data:', e.message);
  });
