


import { AutoComplete } from '@syncfusion/ej2-dropdowns';
//import DataManager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
//initiates the component
let filter: AutoComplete = new AutoComplete({
    //bind the DataManager instance to dataSource property
    dataSource: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    }),
    //bind the Query instance to query property
    query: new Query().select(['ContactName', 'CustomerID']),
    //set the minLength to restrict the remote request until search key contains 3 characters.
    minLength: 3,
    //map the appropriate columns to fields property
    fields: { value: 'ContactName' },
    //set the placeholder to AutoComplete input
    placeholder: "Find a customer",
    //set the filterType to searching operation
    filterType: 'StartsWith',
    //sort the resulted items
    sortOrder: 'Ascending'
});
filter.appendTo('#atcelement');



