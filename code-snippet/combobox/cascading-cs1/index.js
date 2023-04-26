//define the country ComboBox data
var countryData = [
    { CountryName: 'Australia', CountryId: '2' },
    { CountryName: 'United States', CountryId: '1' }
];
//define the state ComboBox data
var stateData = [
    { StateName: 'New York', CountryId: '1', StateId: '101' },
    { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
    { StateName: 'Tasmania ', CountryId: '2', StateId: '105' }
];
//define the city ComboBox data
var cityData = [
    { CityName: 'Albany', StateId: '101', CityId: 201 },
    { CityName: 'Beacon ', StateId: '101', CityId: 202 },
    { CityName: 'Emporia', StateId: '102', CityId: 206 },
    { CityName: 'Hampton ', StateId: '102', CityId: 205 },
    { CityName: 'Hobart', StateId: '105', CityId: 213 },
    { CityName: 'Launceston ', StateId: '105', CityId: 214 }
];
//initiates the country ComboBox
var countryObj = new ej.dropdowns.ComboBox({
    //set the data to dataSource property
    dataSource: countryData,
    fields: { value: 'CountryId', text: 'CountryName' },
    //bind the change event handler
    change: () => {
        //Query the data source based on country ComboBox selected value
        stateObj.query = new ej.data.Query().where('CountryId', 'equal', countryObj.value);
        // enable the state ComboBox
        stateObj.enabled = true;
        //clear the existing selection.
        stateObj.text = null;
        // bind the property changes to state ComboBox
        stateObj.dataBind();
        //clear the existing selection in city ComboBox
        cityObj.text = null;
        //disabe the city ComboBox
        cityObj.enabled = false;
        //bind the property cahnges to City ComboBox
        cityObj.dataBind();
    },
    placeholder: 'Select a country',
});
//render the country ComboBox
countryObj.appendTo('#countries');
//initiates the state ComboBox
var stateObj = new ej.dropdowns.ComboBox({
    //set the data to dataSource property
    dataSource: stateData,
    fields: { value: 'StateId', text: 'StateName' },
    // set disable state by default to prevent user interact.
    enabled: false,
    change: () => {
        // Query the data source based on state ComboBox selected value
        cityObj.query = new ej.data.Query().where('StateId', 'equal', stateObj.value);
        // enable the city ComboBox
        cityObj.enabled = true;
        //clear the existing selection
        cityObj.text = null;
        // bind the property change to city ComboBox
        cityObj.dataBind();
    },
    placeholder: 'Select a state',
});
//render the state ComboBox
stateObj.appendTo('#states');
//initiates the city ComboBox
var cityObj = new ej.dropdowns.ComboBox({
    //set the data to dataSource property
    dataSource: cityData,
    fields: { text: 'CityName', value: 'CityId' },
    // disable the ComboBox by default to prevent the user interact.
    enabled: false,
    placeholder: 'Select a city',
});
//render the city ComboBox
cityObj.appendTo('#cities');

