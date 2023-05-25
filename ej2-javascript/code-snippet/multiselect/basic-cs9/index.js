var searchData = [
{ index: "s1", country: "Alaska" }, { index: "s2", country: "California" },
{ index: "s3", country: "Florida" }, { index: "s4", country: "Georgia" }
];

//initiates the component
var msObject = new ej.dropdowns.MultiSelect({
    dataSource: searchData,
    // map the appropriate column
    fields: { text: "country", value: "index" },
    // set placeholder to MultiSelect input element
    placeholder:"Select countries",
    // set true to allowFiltering for enable filtering supports
    allowFiltering: true,
    //Bind the filter event
    filtering: function (e) {
        let query = new ej.data.Query();
        //frame the query based on search string with filter type.
        query = (e.text != "") ? query.where("country", "startswith", e.text, true) : query;
        //pass the filter data source, filter query to updateData method.
        e.updateData(searchData, query);
    }
});

msObject.appendTo('#select');

