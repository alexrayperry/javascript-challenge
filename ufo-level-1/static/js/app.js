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

// Create variables to holdl html selectors

var button = d3.select("#filter-btn");

var form = d3.select("form");

// Create event listeners to listen for when a specified even takes places and run function

button.on("click", runEnter);
form.on("submit", runEnter);

// Begin writing function for preventing default action when form is submitted, 
// listening when the button is clicked, and filtering table and displaying on webpage. 

function runEnter() {

    // Prevent default behavior
    d3.event.preventDefault();

    // Select tag where user inserted a value
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    //filter data by user input value
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    // remove current html displaying table
    tbody.html("");

    // Loop through filtered data and display on table
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


