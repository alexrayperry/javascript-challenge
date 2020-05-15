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
    
        var row = tbody.append("tr");
    
        // For loop through key values pairs using Object.entries and appending value to 
        // each column within table, adding a new row for each new row of data
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
    
            sightingInfo.text(value);

        });
    });
};




// BONUS PT 2

// Create Date Dropdown 

// Filter data to return list of dates
var dates = data.map(object => object.datetime);

// removed dupliates from list of dates
var filterDate = dates.filter((item, index) => dates.indexOf(item) === index);

// variabel for selecting date drop down in html
var dateSelection = d3.select("#dateDataset");

// Loop through list of dates and append date (text) and date (as value attribute) to html.
// This will display each individual date option in the dropdown, without duplicates.
filterDate.forEach((date) => {

    var dateSelect = dateSelection.append("option");

    dateSelect.text(date);
  
    dateSelect.attr("value", `${date}`);

});


// Repeat process above to create City Dropdown.

var cities = data.map(object => object.city).sort();

var filterCity = cities.filter((item, index) => cities.indexOf(item) === index);

var citySelection = d3.select("#cityDataset");

filterCity.forEach((city) => {

    var citySelect = citySelection.append("option");

    citySelect.text(city);
  
    citySelect.attr("value", `${city}`);

});


// Repeat process above to create State Dropdown.

var states = data.map(object => object.state).sort();

var filterState = states.filter((item, index) => states.indexOf(item) === index);

var stateSelection = d3.select("#stateDataset");

filterState.forEach((state) => {

    var stateSelect = stateSelection.append("option");

    stateSelect.text(state);
  
    stateSelect.attr("value", `${state}`);

});


// Repeat process above to create Country Dropdown.

var countries = data.map(object => object.country).sort();

var filterCountry = countries.filter((item, index) => countries.indexOf(item) === index);

var countrySelection = d3.select("#countryDataset");

filterCountry.forEach((country) => {

    var countrySelect = countrySelection.append("option");

    countrySelect.text(country);
  
    countrySelect.attr("value", `${country}`);

});

// Repeat process above to create Shape Dropdown.

var shapes = data.map(object => object.shape).sort();

var filterShape = shapes.filter((item, index) => shapes.indexOf(item) === index);

var shapeSelection = d3.select("#shapeDataset");

filterShape.forEach((shape) => {

    var shapeSelect = shapeSelection.append("option");

    shapeSelect.text(shape);
  
    shapeSelect.attr("value", `${shape}`);

});



// Create Date Filter & Function to sort table by option selected from Drop Down.

d3.selectAll("#dateDataset").on("change", sortDateData);

function sortDateData() {

    var dateDropDown = d3.select("#dateDataset");

    var dateValue = dateDropDown.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === dateValue);
    
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
    
            sightingInfo.text(value);

        });
    });
};



// Create City Filter & Function to sort table by option selected from Drop Down.

d3.selectAll("#cityDataset").on("change", sortCityData);

function sortCityData() {

    var cityDropDown = d3.select("#cityDataset");

    var cityValue = cityDropDown.property("value");

    var filteredData = tableData.filter(tableData => tableData.city === cityValue);
    
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
    
            sightingInfo.text(value);

        });
    });
};



// Create State Filter & Function to sort table by option selected from Drop Down.

d3.selectAll("#stateDataset").on("change", sortStateData);

function sortStateData() {

    var stateDropDown = d3.select("#stateDataset");

    var stateValue = stateDropDown.property("value");

    var filteredData = tableData.filter(tableData => tableData.state === stateValue);
    
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
    
            sightingInfo.text(value);

        });
    });
};



// Create Country Filter & Function to sort table by option selected from Drop Down.

d3.selectAll("#countryDataset").on("change", sortCountryData);

function sortCountryData() {

    var countryDropDown = d3.select("#countryDataset");

    var countryValue = countryDropDown.property("value");

    var filteredData = tableData.filter(tableData => tableData.country === countryValue);
    
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
    
            sightingInfo.text(value);

        });
    });
};



// Create Shape Filter & Function to sort table by option selected from Drop Down.

d3.selectAll("#shapeDataset").on("change", sortShapeData);

function sortShapeData() {

    var shapeDropDown = d3.select("#shapeDataset");

    var shapeValue = shapeDropDown.property("value");

    var filteredData = tableData.filter(tableData => tableData.shape === shapeValue);
    
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((search) => {
    
        var row = tbody.append("tr");
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
    
            sightingInfo.text(value);

        });
    });
};
  