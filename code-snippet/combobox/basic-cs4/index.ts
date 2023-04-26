


import { ComboBox, FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';

let searchData: { [key: string]: Object; }[] = [
{ Index: "s1", Country: "California" }, { Index: "s2", Country: "Florida" },
{ Index: "s3", Country: "Alaska" }, { Index: "s4", Country: "Georgia" }
];
let filter: ComboBox = new ComboBox({
    //set the search data to dataSource property
    dataSource: searchData,
    //map the appropriate columns to fields property
    fields: { text: "Country", value: "Index" },
    //set the placeholder to ComboBox input
    placeholder:"Select a country",
    //enable to filtering in ComboBox
    allowFiltering: true,
    //sort the resulted items
    sortOrder: 'Ascending',
    //Bind the filter event
    filtering: function (e: FilteringEventArgs) {
        let query = new Query();
        //frame the query based on search string with filter type.
        query = (e.text != "") ? query.where("Country", "startswith", e.text, true) : query;
        //pass the filter data source, filter query to updateData method.
        e.updateData(searchData, query);
    }
});
filter.appendTo('#comboelement');



