


import { Mention } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
let searchData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});
let filter: Mention = new Mention({
    dataSource: searchData,
    query: new Query().select(['ContactName', 'CustomerID']).take(7),
    // map the appropriate column
    fields: { text: 'ContactName', value: 'CustomerID' },
    minLength: 3
});
filter.appendTo('#mentionElement');



