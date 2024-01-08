//initiates the component
var listObj = new ej.dropdowns.ListBox({
    //bind the DataManager instance to dataSource property
    dataSource: new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
        }),
    //bind the Query instance to query property
    query: new ej.data.Query().from('Products').select('ProductID,ProductName').take(10),
    //map the appropriate columns to fields property
    fields: { text: 'ProductName', value: 'ProductID' }

});


listObj.appendTo('#listbox');

