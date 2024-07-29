const button = document.getElementById("get-location-button");
let v = document.getElementById("value");

async function getData(lat, long) {
  try {
    alert(`latitude: ${lat}, longitude: ${long}`);
    v.innerText = `latitude: ${lat}, longitude: ${long}`;
    return {
      latitude: lat,
      longitude: long,
    };
  } catch (error) {
    console.error("There has been a problem:", error);
  }
}

async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log("Latitude:", result.latitude);
  console.log("Longitude:", result.longitude);
}

function failedToGet() {
  console.log("Failed To Get Location");
}

button.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});
