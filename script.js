
function doSomething(lat, lng) {
  console.log(`Широта: ${lat}, Долгота: ${lng}`);
}

function getCoords(){
  return new Promise((resolve, reject)=> {
    resolve(
      navigator.geolocation.getCurrentPosition(position=> {
        doSomething(position.coords.latitude, position.coords.longitude)
      })
    )
    reject(new Error('Координаты не получены'))
  })
}

getCoords().catch(err=> console.log(err))