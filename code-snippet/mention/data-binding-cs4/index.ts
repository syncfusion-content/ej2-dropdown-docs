


import { Mention } from '@syncfusion/ej2-dropdowns';
//import DataManager related classes
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

//initiates the control
let mentionObject: Mention = new Mention({
    //bind the DataManager instance to dataSource property
    dataSource: new DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    }),
    //bind the Query instance to query property
    query: new Query().select(['FirstName', 'EmployeeID']).take(7),
    //map the appropriate columns to fields property
    fields: { text: 'FirstName', value: 'EmployeeID' },
    popupWidth: '250px'
});

//render the control
mentionObject.appendTo('#mentionElement');



