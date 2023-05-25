


import { ListBox } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';  

//initiates the component
let listObj: ListBox = new ListBox({
    //bind the DataManager instance to dataSource property
    dataSource: new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor
        }),
    //bind the Query instance to query property
    query: new Query().from('Products').select('ProductID,ProductName').take(10),
    //map the appropriate columns to fields property
    fields: { text: 'ProductName', value: 'ProductID' }

});


listObj.appendTo('#listbox');



