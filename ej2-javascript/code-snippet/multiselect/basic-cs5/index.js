//define the array of complex data
var sportsData = [
    { id: 'game1', sports: 'Badminton' },
    { id: 'game2', sports: 'Football' },
    { id: 'game3', sports: 'Tennis' }
];

//initiate the MultiSelect
var msObject = new ej.dropdowns.MultiSelect({
    // bind the sports Data to datasource property
    dataSource: sportsData,
    // maps the appropriate column to fields property
    fields: { text: 'sports', value: 'id' },
    //set the placeholder to MultiSelect input
    placeholder:"Select games",
    //enable custom Value option with multislect
    allowCustomValue:true
});
// render initialized multiSelect
msObject.appendTo('#select');

