
var sortedByRating = data.sort((a, b) => b.Happiness_Score - a.Happiness_Score);

var trace1 = {
  x:sortedByRating.map(object => object.Country ),
  y:sortedByRating.map(object => object.Happiness_Score),
  text: sortedByRating.map(object => object.Country),
  name: "Country Happiness Ratings",
  type: "bar",
  marker: {
    color: 'yellow'
  }
 };

var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Country Overall Happiness Rank 2019",
  yaxis:{ 'range': [0,9.9999]},
  width: 2500,
  height: 500,
  margin: {b:200,
           t: 100,
           l:10,
           r:10},
  plot_bgcolor: "black"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

