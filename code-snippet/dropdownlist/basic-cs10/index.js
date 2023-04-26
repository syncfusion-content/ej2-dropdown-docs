//bind the data manager instance to dataSource property
var data=new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ej.data.ODataV4Adaptor(),
            crossDomain: true
    });
    //initiates the component
var customers = new ej.dropdowns.DropDownList({
    //bind the data manager instance to dataSource property
    dataSource : data,
    //bind the Query instance to query property
    query: new ej.data.Query().select(['ContactName']).take(6),
    //map the appropriate columns to fields property
    fields: { value: 'ContactName'},
    //set the placeholder to DropDownList input
   placeholder: "Select a name", 
    // set true to allowFiltering for enable filtering supports
     allowFiltering: true,
    //bind the filtering event handler
    filtering: (e) => {
        // take text for highlight the character in list items.
        let text = e.text;
        let query = new ej.data.Query().select(['ContactName', 'CustomerID']);
        //frame the query based on search string with filter type.
        query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
        //pass the filter data source, filter query to updateData method.
        e.updateData(data, query);
        setTimeout(() => {
            let popupElement = document.getElementById('ddlelement_popup');
            // get the list from popup element
            let lists = popupElement.querySelector('ul');
            // pass the element, text, ignore case and filter type as argument to highlightSearch method.
            ej.dropdowns.highlightSearch(lists, text, true, 'StartsWith');
        }, 300);
    }
});

//render the component
customers.appendTo('#ddlelement');

