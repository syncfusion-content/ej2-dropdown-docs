


import { MultiSelect } from '@syncfusion/ej2-dropdowns';
//import DataManager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

//initiates the component
let customers: MultiSelect = new MultiSelect({
    //bind the DataManager instance to dataSource property
    dataSource: new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
    //bind the Query instance to query property
    query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
    //map the appropriate columns to fields property
    fields: { text: 'ContactName', value: 'CustomerID' },
    //set the placeholder to MultiSelect input
    placeholder:"Select customers",
    //sort the resulted items
    sortOrder: 'Ascending'
});

//render the component
customers.appendTo('#select');



