var sortedByEconomy = data.sort((e, f) => f.Economy_GDP_per_Capita - e.Economy_GDP_per_Capita);


var trace = {
    x:sortedByEconomy.map(object => object.Country ),
    y:sortedByEconomy.map(object => object.Economy_GDP_per_Capita ),
    text: sortedByEconomy.map(object => object.Country),
    name: "Countries by Economy(GDP per Capita",
    type: "bar",
    marker: {
      color: 'green',
      opacity: .5
    }
  };
  
  // data
  var data = [trace];
  
  // Apply the group bar mode to the layout
  var layout = {
    title: "Importance of Economy 2019",
    yaxis:{'range': [0,2.2]},
    width: 2500,
    height: 500,
    margin: {b:200,
             t: 100,
             l:10,
             r:10},
    plot_bgcolor: "black"           
  };
  
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot4", data, layout);