const pieCharts = (arr) => {
  console.log(arr);
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable(arr);

    var options = {
      is3D: true,
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("piechart_3d")
    );
    chart.draw(data, options);
  }
};

export default pieCharts;
