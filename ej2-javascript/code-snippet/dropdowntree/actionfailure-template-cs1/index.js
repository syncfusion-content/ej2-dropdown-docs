var data = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svs',
    adaptor: new ej.data.ODataV4Adaptor,
    crossDomain: true,
});
var query = new ej.data.Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
var query1 = new ej.data.Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
var ddTreeObj = new ej.dropdowns.DropDownTree({
    fields: {
        dataSource: data, query: query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
        child: { dataSource: data, query: query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
    },
    width: '100%',
    actionFailureTemplate: "<span class='action-failure'> Data fetch request fails</span>",
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddTreeObj.appendTo('#template');

