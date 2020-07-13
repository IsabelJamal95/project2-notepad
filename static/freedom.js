var sortedByFreedom = data.sort((e, f) => f.Freedom - e.Freedom);

var trace = {
    x:sortedByFreedom.map(object => object.Country ),
    y:sortedByFreedom.map(object => object.Freedom ),
    text: sortedByFreedom.map(object => object.Country),
    name: "Countries by Freedom",
    type: "bar",
    marker: {
      color: 'blue',
      opacity: .5
    }
  };
  
  // data
  var data = [trace];
  
  // Apply the group bar mode to the layout
  var layout = {
    title: "Importance of Freedom 2019",
    yaxis:{'range': [0,.7]},
    width: 2500,
    height: 500,
    margin: {b:200,
             t: 100,
             l:10,
             r:10},
    plot_bgcolor: "black"        
  };
  
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot6", data, layout);