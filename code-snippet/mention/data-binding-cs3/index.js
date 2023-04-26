// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
    //bind the data manager instance to dataSource property
    dataSource: new ej.data.DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ej.data.ODataV4Adaptor(),
        crossDomain: true
    }),
    //bind the Query instance to query property
    query: new ej.data.Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
    fields: { text: 'ContactName', value: 'CustomerID' },
    popupWidth: '250px'
});
mentionObj.appendTo('#mentionElement');
 

