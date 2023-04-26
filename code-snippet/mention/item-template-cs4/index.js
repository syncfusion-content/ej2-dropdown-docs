//initiates the component
var mentionObject = new ej.dropdowns.Mention({
    //bind the data manager instance to dataSource property
    dataSource: new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new ej.data.Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(26),
    //map the appropriate columns to fields property
    fields: { value: 'FirstName' },
    //set width to popup list
    popupWidth: '200px',
    //sort the resulted items
    sortOrder: 'Ascending',
    spinnerTemplate: '<div class="spinner_loader"></div>'
});

//render the component
mentionObject.appendTo('#mentionElement');

