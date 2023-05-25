


import { ComboBox, FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
// defined the dataManager
let searchData: DataManager = new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
});
let filter: ComboBox = new ComboBox({
    dataSource: searchData,
    query: new Query().select(['ContactName', 'CustomerID']).take(6),
    // map the appropriate column
    fields: { text: 'ContactName', value: 'CustomerID' },
    // set placeholder to ComboBox input element
    placeholder:"Select a customer",
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    //sort the resulted items
    sortOrder: 'Ascending',
    //set the height of the popup element
    popupHeight: "250px",
    //bind the filtering event handler
    filtering: (e: FilteringEventArgs) => {
        // load overall data when search key empty.
        if(e.text == '') e.updateData(searchData);
        else{
          let query: Query = new Query().select(['ContactName', 'CustomerID']);
           //enable the case sensitive filtering by passing false to 4th parameter.
          query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, false) : query;
          e.updateData(searchData, query);
        }
    }
});
filter.appendTo('#comboelement');



