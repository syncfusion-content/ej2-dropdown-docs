//initiates the component
var acObject = new ej.dropdowns.AutoComplete({
    //bind the data manager instance to dataSource property
    dataSource: new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new ej.data.Query().select(['ContactName']),
    //map the appropriate columns to fields property
    fields: { value: 'ContactName'},
    //set the suggestionCount to show the maximum suggestion list item
     suggestionCount: 5,
    //set the placeholder to AutoComplete input
    placeholder: "Find a customer",
    //set the filterType to searching operation
    filterType: 'StartsWith',
    //sort the resulted items
    sortOrder: 'Ascending'
});

//render the component
acObject.appendTo('#atcelement');

