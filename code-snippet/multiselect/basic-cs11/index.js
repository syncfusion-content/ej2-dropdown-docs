var searchData = new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
});
var filter = new ej.dropdowns.MultiSelect({
    dataSource: searchData,
    query: new ej.data.Query().select(['ContactName', 'CustomerID']).take(7),
    // map the appropriate column
    fields: { text: 'ContactName', value: 'CustomerID' },
    // set placeholder to MultiSelect input element
    placeholder:"Select customers",
    //sort the resulted items
    sortOrder: 'Ascending',
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    //bind the filtering event handler
    filtering: (e) => {
        // load overall data when search key empty.
        if(e.text == '') e.updateData(sportsData);
        else{
          let query = new ej.data.Query().select(['sports', 'id']);
           //enable the case sensitive filtering by passing false to 4th parameter.
          query = (e.text !== '') ? query.where('sports', 'endswith', e.text, true) : query;
          e.updateData(sportsData, query);
        }
    }
});
filter.appendTo('#select');

