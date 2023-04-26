


import { Mention } from '@syncfusion/ej2-dropdowns';
//import data manager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

//initiates the control
let mentionObject: Mention = new Mention({
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
    //set width to popup list
    popupWidth: '200px',
    //set the value to itemTemplate property
    itemTemplate:"<span><span class='name'>${FirstName}</span><span class ='city'>${City}</span></span>"

});

//render the control
mentionObject.appendTo('#mentionElement');



