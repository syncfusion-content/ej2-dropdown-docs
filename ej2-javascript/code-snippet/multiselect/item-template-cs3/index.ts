


import { MultiSelect } from '@syncfusion/ej2-dropdowns';
//import data manager related classes
import { Query, Predicate , DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

// form  predicate to fetch the grouped data
let groupPredicate = new Predicate('City', 'equal','london').or('City','equal','seattle');

//initiates the component
let msObject: MultiSelect = new MultiSelect({
    //bind the data manager instance to dataSource property
    dataSource: new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(5)
    .where(groupPredicate),
    //map the appropriate columns to fields property
    fields: { text: 'FirstName', value: 'EmployeeID', groupBy:'City' },
    //set the placeholder to MultiSelect input
    placeholder:"Select employees",
    //sort the resulted items
    sortOrder: 'Ascending',
    //set the value to groupTemplate
    groupTemplate:"<strong>${City}</strong>"
});

//render the component
msObject.appendTo('#select');



