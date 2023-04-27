//initiates the component
var ddlObject = new ej.dropdowns.DropDownList({
    //bind the data manager instance to dataSource property
    dataSource: new ej.data.DataManager({
            // Here, use the wrong url to display the action failure template
            url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new ej.data.Query().from('Employees').select(['FirstName']).take(6),
    //map the appropriate columns to fields property
    fields: { text: 'FirstName', value: 'EmployeeID' },
    //set the placeholder to DropDownList input
    placeholder:"Select an employee",
    //set the value to action failure template
    actionFailureTemplate:"<span class='action-failure'> Data fetch get fails</span>"

});
ddlObject.appendTo('#ddlelement'); 

