function doSomething(lat, lng) {
  console.log(`Широта: ${lat}, Долгота: ${lng}`);
}

function getCoords() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {

        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {

        reject(new Error('Координаты не получены: ' + error.message));
      },
    );
  });
}

getCoords()
  .then(({ lat, lng }) => doSomething(lat, lng))
  .catch((err) => console.log(err));
