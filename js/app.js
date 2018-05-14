

google.charts.load('current', {
  'packages':['geochart'],
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
    legend: 'none',
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}
