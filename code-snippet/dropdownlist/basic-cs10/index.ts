


// import highlightSearch module from ej2 dropdown package
import { DropDownList, FilteringEventArgs, highlightSearch } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let searchData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});
let text: string;
let filter: DropDownList = new DropDownList({
    dataSource: searchData,
    query: new Query().select(['ContactName', 'CustomerID']).take(7),
    // map the appropriate column
    fields: <{ [key: string]: Object }>{
        text: 'ContactName', value: 'CustomerID', itemCreated: (e: { [key: string]: Object }) => {
            highlightSearch(e.item, text, true, 'StartsWith');
        }
    },
    // set placeholder to DropDownList input element
    placeholder: "Select a name",
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    //bind the filtering event handler
    filtering: (e: FilteringEventArgs) => {
        // take text for highlight the character in list items.
        text = e.text;
        let query: Query = new Query().select(['ContactName', 'CustomerID']);
        //frame the query based on search string with filter type.
        query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
        //pass the filter data source, filter query to updateData method.
        e.updateData(searchData, query);
    }
});
filter.appendTo('#ddlelement');



