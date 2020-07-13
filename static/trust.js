var sortedByTrust = data.sort((e, f) => f.Trust_Government_Corruption - e.Trust_Government_Corruption);


var trace = {
    x:sortedByTrust.map(object => object.Country ),
    y:sortedByTrust.map(object => object.Trust_Government_Corruption ),
    text: sortedByTrust.map(object => object.Country),
    name: "Countries by Trust of Government",
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
    title: "Importance of Trust in Government 2019",
    yaxis:{'range': [0.1,.5]},
    width: 2500,
    height: 500,
    margin: {b:200,
             t: 100,
             l:10,
             r:10},
    plot_bgcolor: "black"       
  };
  
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot3", data, layout);