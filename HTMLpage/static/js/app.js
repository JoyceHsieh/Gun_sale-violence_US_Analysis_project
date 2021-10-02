// Use the D3 library to read in samples.json.


//Read the url input the data into State drop down select tag
url="https://us-gun-sale-and-violence-report-api.azurewebsites.net/api/v1.0/gunsalebystate"
d3.json(url).then(function createPlotly(data) {
    console.log(data);

    var state= []
    data.forEach(function(i){
      state.push(i.State)
    })
    console.log(state);

    var statevalue=[]
    data.forEach(function(v){
    statevalue.push(v.State,v.feature['2017'],v.feature['2018'],v.feature['2019'],v.feature['2020'],v.feature['2021'])
    })
    console.log(statevalue);

   
    d3.select("#selDataset_state").selectAll("option").data(state).enter().append("option")
    .html(function(d) {
    return `<option>${d}</option>`;
    });

})



    // var dropdownMenu = d3.select("#selDataset_state");
    // var dropdownValue = dropdownMenu.property("value");
    // var index = data.indexOf(dropdownValue);

    // var label=['2017','2018','2019','2020','2021']

    // var bardata = [
    //   {
    //     x: label,
    //     y: statevalue,
    //     type: "bar",
    //     orientation: "h",
    //   }
    // ];
  
    // var barLayout = {
    //   title: "Gun Sale in ",
    //   xaxis: { title: "Year" }
    // };
  
    // Plotly.newPlot("bar", bardata, barLayout);
    

    // When different test ID is selected, call an function optionChanged
  //   d3.select("#selDataset_state").on("change", optionChanged);
  
  //  function optionChanged() {
  //    console.log("Different item was selected.");
  //    var dropdownMenu = d3.select("#selDataset_state");
  //    var dropdownValue = dropdownMenu.property("value");
  //    console.log(`Currently test id ${dropdownValue} is shown on the page`);
 
  //    // Update graph
  //    createPlotly(data);
  //  }

    

    
    


 
   