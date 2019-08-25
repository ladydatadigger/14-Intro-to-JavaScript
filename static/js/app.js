// from data.js
var tableData = data;

// YOUR CODE HERE!
//use d3 to select the table
var tbody = d3.select("#table-body");
// Console.log the ufo data from data.js
console.log(tableData);

function buildTable(ufoData) {
  //clear the tbody to build new table
  tbody.html("");
  //update table with data
  ufoData.forEach((ufoSighting) => {
     var row = tbody.append("tr");
     Object.entries(ufoSighting).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
     });
   });
}

buildTable(tableData);

//reference to filter button
var button = d3.select("#filter-btn");
//on button click use input value to filter data
button.on("click", function() {
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");
  console.log(inputDate);
  console.log(inputCity);
  console.log(inputState);
  console.log(inputCountry);
  console.log(inputShape);
//filtered data compares the input string and displays filtered data
  var filterData = tableData
  if (inputDate) {
    filterData = filterData.filter(sightings => sightings.datetime === inputDate);
  }
  if (inputCity) {
    filterData = filterData.filter(sightings => sightings.city === inputCity);
  }
  if (inputState) {
    filterData = filterData.filter(sightings => sightings.state === inputState);
  }
  if (inputCountry) {
    filterData = filterData.filter(sightings => sightings.country === inputCountry);
  }
  if (inputShape) {
    filterData = filterData.filter(sightings => sightings.shape === inputShape);
  }

  console.log(filterData);
  buildTable(filterData);

});
var btnReset = d3.select("#reset-btn");
btnReset.on("click", function() {
  buildTable(tableData);
});
