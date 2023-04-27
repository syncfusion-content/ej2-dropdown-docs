var data=new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
    });
var customers = new ej.dropdowns.DropDownList({
    //bind the data manager instance to dataSource property
    dataSource : data,
    //bind the Query instance to query property
    query: new ej.data.Query().select(['ContactName']).take(6),
    //map the appropriate columns to fields property
    fields: { value: 'ContactName'},
    //set the placeholder to DropDownList input
   placeholder: "Select a name",
    // sort the resulted items
    sortOrder: 'Ascending',
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    // bind the filtering event handler
    filtering: (e) => {
        // set limit as 4 to search result
        let query = new ej.data.Query().select(['ContactName']).take(6);
        query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
        e.updateData(data, query);
    }
});

//render the component
customers.appendTo('#ddlelement');

