// form  predicate to fetch the grouped data
var groupPredicate = new ej.data.Predicate('City', 'equal','london').or('City','equal','seattle');

var msObject = new ej.dropdowns.MultiSelect({
    //bind the data manager instance to dataSource property
    dataSource: new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new ej.data.Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(5)
    .where(groupPredicate),
    //map the appropriate columns to fields property
    fields: { text: 'FirstName', value: 'EmployeeID' },
    //set the placeholder to MultiSelect input
    placeholder:"Select an employee",
    //sort the resulted items
    sortOrder: 'Ascending',
    //set the value to groupTemplate
    groupTemplate:"<strong>${City}</strong>"
});

//render the component
msObject.appendTo('#select');

