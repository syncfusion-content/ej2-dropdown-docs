//initiates the component
var ddlObject = new ej.dropdowns.DropDownList({
    //bind the data manager instance to dataSource property
    dataSource: new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new ej.data.Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(6),
    //map the appropriate columns to fields property
    fields: { value: 'FirstName' },
    //set the placeholder to DropDownList input
    placeholder:"Select an employee",
    //sort the resulted items
    sortOrder: 'Ascending'
});

//render the component
ddlObject.appendTo('#ddlelement');

