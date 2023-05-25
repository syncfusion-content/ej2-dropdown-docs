ej.base.enableRipple(true);

var data = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true,
});
var query = new ej.data.Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
var query1 = new ej.data.Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);

var DropDownTreeObj = new ej.dropdowns.DropDownTree({
    fields: { dataSource: data, query: query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID', tooltip: 'Title',
        child: { dataSource: data, query: query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
    }
});
DropDownTreeObj.appendTo('#ddltreeelement');

