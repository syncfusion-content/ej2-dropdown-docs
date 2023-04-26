// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
    //bind the data manager instance to dataSource property
    dataSource: new ej.data.DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    }),
    //bind the Query instance to query property
    query: new ej.data.Query().select(['FirstName', 'EmployeeID']).take(7),
    fields: { text: 'FirstName', value: 'EmployeeID' },
    popupWidth: '250px'
});
mentionObj.appendTo('#mentionElement');
 

