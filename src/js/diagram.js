const paintDiagram = (arrDiagramma) => {
  // Load the Visualization API and the corechart package.
  google.charts.load("current", { packages: ["corechart"] });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    // Create the data table.
    var data = google.visualization.arrayToDataTable(arrDiagramma);

    // Set chart options
    var options = {
      width: 1000,
      height: 400,
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }
};

export default paintDiagram;
