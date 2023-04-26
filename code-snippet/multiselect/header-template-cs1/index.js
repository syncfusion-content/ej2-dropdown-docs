var msObject = new ej.dropdowns.MultiSelect({
    //bind the data manager instance to dataSource property
    dataSource: new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new ej.data.Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(6),
    //map the appropriate columns to fields property
    fields: { text: 'FirstName', value: 'EmployeeID' },
    //set the placeholder to MultiSelect input
    placeholder:"Select an employee",
    //sort the resulted items
    sortOrder: 'Ascending',
    //set the value to header template
    headerTemplate:"<span class='head'><span class='name'>Name</span><span class='city'>City</span></span>",
    //set the value to item template
    itemTemplate:"<span class='item' ><span class='name'>${FirstName}</span><span class='city'>${City}</span></span>"
});

//render the component
msObject.appendTo('#select');

