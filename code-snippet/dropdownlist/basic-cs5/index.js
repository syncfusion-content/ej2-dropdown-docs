//initiates the component
var searchData = new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
});
var ddlObject = new ej.dropdowns.DropDownList({
    dataSource: searchData,
    query: new ej.data.Query().select(['ContactName', 'CustomerID']).take(7),
    // map the appropriate column
    fields: { text: 'ContactName', value: 'CustomerID' },
    // set placeholder to DropDownList input element
    placeholder:"Select customers",
    //sort the resulted items
    sortOrder: 'Ascending',
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    //bind the filtering event handler
    filtering: (e) => {
        // load overall data when search key empty.
        if(e.text == '') e.updateData(searchData);
        else{
           // restrict the remote request until search key contains 3 characters.
          if (e.text.length < 3) { return; }
          var query = new ej.data.Query().select(['ContactName', 'CustomerID']);
          query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
          e.updateData(searchData, query);
        }
    }
});
//render the component
ddlObject.appendTo('#ddlelement');

