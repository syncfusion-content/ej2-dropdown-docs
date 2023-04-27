


import { MultiSelect } from '@syncfusion/ej2-dropdowns';
//import data manager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

//initiates the component
let msObject: MultiSelect = new MultiSelect({
    //bind the data manager instance to dataSource property
    dataSource: new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(6),
    //map the appropriate columns to fields property
    fields: { text: 'FirstName', value: 'EmployeeID' },
    //set the placeholder to MultiSelect input
    placeholder:"Select an employee",
    //sort the resulted items
    sortOrder: 'Ascending',
    //set the value to itemTemplate property
    itemTemplate:"<div><span class='name'>${FirstName}</span><span class ='city'>${City}</span></div>"
});

//render the component
msObject.appendTo('#select');



