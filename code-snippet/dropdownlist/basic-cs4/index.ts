


import { DropDownList, FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';

let searchData: { [key: string]: Object; }[] = [
{ Index: "s1", Country: "Alaska" }, { Index: "s2", Country: "California" },
{ Index: "s3", Country: "Florida" }, { Index: "s4", Country: "Georgia" }
];
let filter: DropDownList = new DropDownList({
    dataSource: searchData,
    // map the appropriate column
    fields: { text: "Country", value: "Index" },
    // set placeholder to DropDownList input element
    placeholder:"Select a country",
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    //Bind the filter event
    filtering: function (e: FilteringEventArgs) {
        let query = new Query();
        //frame the query based on search string with filter type.
        query = (e.text != "") ? query.where("Country", "startswith", e.text, true) : query;
        //pass the filter data source, filter query to updateData method.
        e.updateData(searchData, query);
    }
});
filter.appendTo('#ddlelement');



