


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
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    //sort the resulted items
    sortOrder: 'Ascending',
    //bind the filtering event handler
    filtering: (e: FilteringEventArgs) => {
        // load overall data when search key empty.
        if(e.text == '') e.updateData(searchData);
        else{
           // restrict the remote request until search key contains 3 characters.
          if (e.text.length < 3) { return; }
          let query: Query = new Query().select(['ContactName', 'CustomerID']);
          query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
          e.updateData(searchData, query);
        }
    }
});
filter.appendTo('#comboelement');



