


import { ComboBox, FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
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
    //set the height of the popup element
    popupHeight: "250px",
    //sort the resulted items
    sortOrder: 'Ascending',
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    //bind the filtering event handler
    filtering: (e: FilteringEventArgs) => {
        // load overall data when search key empty.
        if(e.text == '') e.updateData(searchData);
        else{
          let query: Query = new Query().select(['ContactName', 'CustomerID']);
          // change the type of filtering to endswith filtering
          query = (e.text !== '') ? query.where('ContactName', 'endswith', e.text, true) : query;
          e.updateData(searchData, query);
        }
    }
});
filter.appendTo('#comboelement');



