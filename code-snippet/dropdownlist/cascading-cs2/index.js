 
var countryData = [
    { CountryName: 'United States', CountryId: '1' },
    { CountryName: 'Australia', CountryId: '2' }
];
//define the state DropDownList data
var stateData = [
    { StateName: 'New York', CountryId: '1', StateId: '101' },
    { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
    { StateName: 'Tasmania ', CountryId: '2', StateId: '105' }
];
//define the city DropDownList data
var cityData = [
    { CityName: 'Albany', StateId: '101', CityId: 201 },
    { CityName: 'Beacon ', StateId: '101', CityId: 202 },
    { CityName: 'Hampton ', StateId: '102', CityId: 205 },
    { CityName: 'Emporia', StateId: '102', CityId: 206 },
    { CityName: 'Hobart', StateId: '105', CityId: 213 },
    { CityName: 'Launceston ', StateId: '105', CityId: 214 }
];
//initiates the country DropDownList
var countryObj = new ej.dropdowns.DropDownList({
    dataSource: countryData,
    // map the appropriate the column to fields property
    fields: { value: 'CountryId', text: 'CountryName' },
    //bind the change event handler
    change: countryChange,
    index: 1,
    // set the placeholder to the DropDownList input
    placeholder: 'Select a country',
});
//render the country DropDownList
countryObj.appendTo('#countries');
//initiates the state DropDownList
var stateObj = new ej.dropdowns.DropDownList({
    dataSource: stateData,
    // map the appropriate the column to fields property
    fields: { value: 'StateId', text: 'StateName' },
    // set disable state by default to prevent user interact.
    enabled: false,
    //bind the change event handler
    change: stateChange,
    // set the placeholder to the DropDownList input
    placeholder: 'Select a state',
});
//render the state DropDownList
stateObj.appendTo('#states');
//initiates the city DropDownList
var cityObj = new ej.dropdowns.DropDownList({
    dataSource: cityData,
    // map the appropriate the column to fields property
    fields: { text: 'CityName', value: 'CityId' },
    // disable the DropDownList by default to prevent the user interact.
    enabled: false,
    // set the placeholder to the DropDownList input
    placeholder: 'Select a city',
});
//render the city DropDownList
cityObj.appendTo('#cities');
// initally change event not triggered, so manually call the corresponding function

countryChange();
// preselect an item from filtered state DropDownList
stateObj.index = 0;
stateObj.dataBind();
// initally change event not triggered, so manually call the corresponding function
stateChange();
// preselect an item from filtered city DropDownList
cityObj.index = 0;
cityObj.dataBind();

function stateChange() {
    // Query the data source based on state DropDownList selected value
    cityObj.query = new ej.data.Query().where('StateId', 'equal', stateObj.value);
    // enable the city DropDownList
    cityObj.enabled = true;
    //clear the existing selection
    cityObj.text = null;
    // bind the property change to city DropDownList
    cityObj.dataBind();
}

function countryChange() {
    //Query the data source based on country DropDownList selected value
    stateObj.query = new ej.data.Query().where('CountryId', 'equal', countryObj.value);
    // enable the state DropDownList
    stateObj.enabled = true;
    //clear the existing selection.
    stateObj.text = null;
    // bind the property changes to state DropDownList
    stateObj.dataBind();
    //clear the existing selection in city DropDownList
    cityObj.text = null;
    //disabe the city DropDownList
    cityObj.enabled = false;
    //bind the property cahnges to City DropDownList
    cityObj.dataBind();
}

