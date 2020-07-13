var sortedByGenerosity = data.sort((e, f) => f.Generosity - e.Generosity);

var trace = {
    x:sortedByGenerosity.map(object => object.Country ),
    y:sortedByGenerosity.map(object => object.Generosity ),
    text: sortedByGenerosity.map(object => object.Country),
    name: "Countries by Generosity",
    type: "bar",
    marker: {
      color: 'magenta',
      opacity: .5
    }
  };
  
  // data
  var data = [trace];
  
  // Apply the group bar mode to the layout
  var layout = {
    title: "Importance of Generosity 2019",
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
  Plotly.newPlot("plot5", data, layout);