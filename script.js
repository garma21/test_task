function initMap() {
    var pos = { lat: 43.45280777552029, lng: -80.51338045057469 };
    var opt = {
        center: pos,
        zoom: 17,
        disableDefaultUI: true,
    };

    var map = new google.maps.Map(document.getElementById("block_gmaps"), opt);

    const marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: 'https://img.icons8.com/external-mixed-line-solid-yogi-aprelliyanto/64/external-location-brand-identity-mixed-line-solid-yogi-aprelliyanto.png',

    });

    // var info = new google.maps.InfoWindow({
    //     content: '<div><p>qwerty</p></div>'
    // });
    // marker.addListener("click", function () {
    //     info.open(map, marker);
    // });
}