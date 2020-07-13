var sortedByHealth = data.sort((c, d) => d.Health_Life_Expectancy - c.Health_Life_Expectancy);

var trace2 = {
    x:sortedByHealth.map(object => object.Country ),
    y:sortedByHealth.map(object => object.Health_Life_Expectancy ),
    text: sortedByHealth.map(object => object.Country),
    name: "Countries by Life Expectancy",
    type: "bar",
    marker: {
      color: 'aqua',
      opacity: 1
    }
  };
  
  // data
  var data2 = [trace2];
  
  // Apply the group bar mode to the layout
  var layout2 = {
    title: "Importance of Life Expectancy 2019",
    yaxis:{'range': [0.1,1.2]},
    width: 2500,
    height: 500,
    margin: {b:200,
             t: 100,
             l:10,
             r:10},
    plot_bgcolor: "black"           
  };
  
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot2", data2, layout2);


