
const endpoint = 'https://restcountries.eu/rest/v2/all';
const countries = [];
const names = [];

fetch(endpoint)
    .then(resp => resp.json())
    .then(data => countries.push(...data))
    .then(countries.map(country => names.push(...country.name)))
    .then(console.log(names));

const array = countries.map(country => country).join('');
console.log(array);

// console.log(countries);


// function loadArray(){
// cities.map(place => console.log(place)).join('');
// }
//
//
// window.addEventListener('load', loadArray)

    // fetch('https://restcountries.eu/rest/v2/all')
    // .then(function(resp) {
    //   return resp.json()
    //   })
    //   .then(function(data) {
    //     countries.push(...data)
    //     })
    //   .catch(function(error) {
    //     console.log(error);
    //   });



//  const arr = [1, 'sdf', 2333]
 // console.log(countries);

// arr.forEach(aa => console.log(aa))


google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyBDrW_7FAqvg-1jfkGLcMupHWIMbUv6vWU'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['dfgh', 1000],
  ]);

  var options = {
    backgroundColor: '#81d4fa',
    legend: 'none',
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}
