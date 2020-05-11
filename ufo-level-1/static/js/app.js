// from data.js
var tableData = data;

// Select the table by using D3 and html ID

var tbody = d3.select("tbody");

// Run a for loop to go through each object in the data

tableData.forEach((sighting) => {

    // Get to the row html tag and define variable for location

    var row = tbody.append("tr");

    // For loop through key values pairs using Object.entries and appending value to 
    // each column within table, adding a new row for each new row of data

    Object.entries(sighting).forEach(([key, value]) => {

        var sightingInfo = row.append("td");

        sightingInfo.text(value);

    });
});

var button = d3.select("#filter-btn");

var form = d3.select("form")

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    console.log(filteredData);

    tbody.html("");


    filteredData.forEach((search) => {

        // Get to the row html tag and define variable for location
    
        var row = tbody.append("tr");
    
        // For loop through key values pairs using Object.entries and appending value to 
        // each column within table, adding a new row for each new row of data
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
    
            sightingInfo.text(value);


        });
    });
};


