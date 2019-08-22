// from data.js
var tableData = data;

// select the table body
var tbody = d3.select("tbody");

// console.log the ufo data from data.js
console.log(tableData);

// loop through `data` and console.log each ufo sightings object
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
});

// use d3 to append one table row `tr` for each weather report object
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
});

// use `Object.entries` to console.log each weather report value
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
  
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
    });
});

// use d3 to update each cell's text with ufo sighting values
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo sighting object
      var cell = row.append("td");
      cell.text(value);
    });
});

// Select the filter button
var filter = d3.select("#filter-btn");

filter.on("click", function() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

  
    // select the table body and clear all data
    var tbody = d3.select("tbody");

    tbody.html("");

    // append filtered data into empty table

    filteredData.forEach(function(ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value in the ufo sighting object
          var cell = row.append("td");
          cell.text(value);
        });
    });
});
