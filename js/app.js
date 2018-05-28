// browser-sync start --server --files="**/*"

// array of coffee shops
var coffeeArray = [{"name":"Cafe Presse","address":"1117 12th Ave","city": "Seattle", "state": "WA 98122","phone_number":"+1 206-709-7674","Google_ratings":4.4,"latitude":"47.61207","longitude":"-122.31698", "website": "http://cafepresseseattle.com/home/"}
, {"name":"Anchorhead Coffee","address":"CenturyLink Plaza, 1600 7th Ave #105","city": "Seattle", "state": "WA 98101","phone_number":"","Google_ratings":4.6,"latitude":"47.6134","longitude":"-122.33476", "website": "http://www.anchorheadcoffee.com/"}
, {"name":"Slate Coffee Roasters","address":"1309 NE 45th St","city": "Seattle", "state": "WA 98105","phone_number":"+1 206-235-6564","Google_ratings":4.4,"latitude":"47.66112","longitude":"-122.31388","website": "https://slatecoffee.com/"}
, {"name":"MiiR Flagship","address":"3400 Stone Way N","city": "Seattle", "state": "WA 98103","phone_number":"+1 206-566-7207","Google_ratings":4.6,"latitude":"47.64885","longitude":"-122.34246","website": "https://www.miir.com/pages/flagship"}
, {"name":"La Marzocco Cafe","address":"472 1st Ave N","city": "Seattle", "state": "WA 98109","phone_number":"+1 206-388-3500","Google_ratings":4.7,"latitude":"47.62281","longitude":"-122.35514","website": "http://www.lamarzoccousa.com/"}
, {"name":"Storyville Coffee Queen Anne","address":"2128 Queen Anne Ave N","city": "Seattle", "state": "WA 98109","phone_number":"+1 206-780-5777","Google_ratings":4.7,"latitude":"47.63826","longitude":"-122.35679","website": "https://www.storyville.com/"}
, {"name":"Elm Coffee Roasters","address":"240 2nd Ave S #103","city": "Seattle", "state": "WA 98104","phone_number":"+1 206-445-7808","Google_ratings":4.6,"latitude":"47.60013","longitude":"-122.33107","website": "http://elmcoffeeroasters.com/?gclid=EAIaIQobChMI_cfin_qm2wIVh9lkCh1OFQKmEAAYASAAEgLHLvD_BwE"}
, {"name":"Caffe Umbria","address":"3531, 1201 Westlake Ave N","city": "Seattle", "state": "WA 98109","phone_number":"+1 206-708-6141","Google_ratings":4.6,"latitude":"47.62989","longitude":"-122.34117","website": "https://caffeumbria.com/"}
, {"name":"Mr. West Cafe Bar","address":"720 Olive Way","city": "Seattle", "state": "WA 98101","phone_number":"+1 206-900-9378","Google_ratings":4.3,"latitude":"47.61412","longitude":"-122.33449","website": "http://mrwestcafebar.com/"}
, {"name":"Cherry Street Public House","address":"210 Occidental Ave S","city": "Seattle", "state": "WA 98104","phone_number":"+1 206-387-4523","Google_ratings":4.5,"latitude":"47.60035","longitude":"-122.33287","website": "http://www.cherrystreetpublichouse.com/"}
]
// Create the map object, set the view and zoom
const seattleMap = L.map("mapid").setView([47.604311, -122.331734], 11.5);

// Add the background tiles to the map
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoibmlja2RlbmFyZGlzIiwiYSI6ImNqaGRla2pjMjBvYXgzNm13Yzc3aGIwM3kifQ.G2Tr-B7ppCNdj6xuM0Qc5A"
  }
).addTo(seattleMap);

// Render the map on screen
function renderMap(data) {
  // `data` is an array of objects
  // console.log(data);
  // Add each object to the map if `latitude` and `longitude` are available
  data.forEach(function(obj) {
    if (obj['latitude'] != undefined){
      if (obj['longitude'] != undefined){
        // Use `bindPopup()` to add `type`, `datetime`, and `address` properties
        L.marker([obj['latitude'], obj['longitude']]).addTo(seattleMap)
                .bindPopup('<strong>' + obj['name'] + '</strong>' 
                          + '<br>' + '<strong>' + 'Phone Number: '+ '</strong>' + obj['phone_number']
                          + '<br>' + '<strong>' + 'Address: ' + '</strong>' + obj['address']
                          + '<br>' + obj['city'] + ', ' + obj['state'])
      }
    }
  });
}
renderMap(coffeeArray);