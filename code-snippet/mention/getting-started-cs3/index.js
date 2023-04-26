//initiates the component
var mentionObject = new ej.dropdowns.Mention({
  //bind the data manager instance to dataSource property
  dataSource: new ej.data.DataManager({
          url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
          adaptor: new ej.data.ODataV4Adaptor(),
          crossDomain: true
  }),
  //bind the Query instance to query property
  query: new Query().select(['ContactName', 'CustomerID']).take(7),
  //map the appropriate columns to fields property
  fields: { text: 'ContactName', value: 'CustomerID' },
  minLength: 3
});

//render the component
mentionObject.appendTo('#mentionElement');

