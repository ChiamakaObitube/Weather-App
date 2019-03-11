window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = 'https://api.darksky.net/forecast/6ac6a1c43cbc37bd8ee528388f3882c7/$(lat), $(long)';
        });
    } else {

        h2.textContent = "Enable location";
    }
});