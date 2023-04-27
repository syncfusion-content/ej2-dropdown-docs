


import { DropDownTree } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
let data: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svs',
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
});
let query: Query = new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
let query1: Query = new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
let ddTreeObj: DropDownTree = new DropDownTree({
    fields: {
        dataSource: data, query: query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
        child: { dataSource: data, query: query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
    },
    width: '100%',
    actionFailureTemplate:"<span class='action-failure'> Data fetch request fails</span>",
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddTreeObj.appendTo('#template');



