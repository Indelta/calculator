const pieCharts = (arr) => {
  console.log(arr);
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable(arr);   

    var chart = new google.visualization.PieChart(
      document.getElementById("piechart")
    );
    chart.draw(data);
  }
};

export default pieCharts;
