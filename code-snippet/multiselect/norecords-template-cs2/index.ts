


import { MultiSelect } from '@syncfusion/ej2-dropdowns';
//import data manager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

//initiates the component
let MultiSelectObject: MultiSelect = new MultiSelect({
    //bind the data manager instance to dataSource property
    dataSource: new DataManager({
            // Here, use the wrong url to display the action failure template
            url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
    }),
    //bind the Query instance to query property
    query: new Query().from('Employees').select(['FirstName']).take(6),
    //map the appropriate columns to fields property
    fields: { text: 'FirstName', value: 'EmployeeID' },
    //set the placeholder to MultiSelect input
    placeholder:"Select an employee",
    //set the value to action failure template
    actionFailureTemplate:"<span class='action-failure'> Data fetch get fails</span>"

});

//render the component
MultiSelectObject.appendTo('#select');



