


import { DropDownTree } from '@syncfusion/ej2-dropdowns';
//import data manager related classes
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
});
let query: Query = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
let query1: Query = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);

let DropDownTreeObj: DropDownTree = new DropDownTree({
    fields: { dataSource: data, query: query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID', tooltip: 'Title',
        child: { dataSource: data, query: query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
    }
});
DropDownTreeObj.appendTo('#ddltreeelement');



