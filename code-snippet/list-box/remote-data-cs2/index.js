var groupA = [
    { "Name": "Australia", "Code": "AU" },
    { "Name": "Bermuda", "Code": "BM" },
    { "Name": "Canada", "Code": "CA" },
    { "Name": "Cameroon", "Code": "CM" },
    { "Name": "Denmark", "Code": "DK" },
    { "Name": "France", "Code": "FR" },
    { "Name": "Finland", "Code": "FI" },
    { "Name": "Germany", "Code": "DE" },
    { "Name": "Hong Kong", "Code": "HK" }
];

var listObj = new ej.dropdowns.ListBox({

    // Set the groupa data to the data source.
    dataSource: groupA,
    // Set allowDragAndDrop as `true`.
    allowDragAndDrop: true,

    // Map the appropriate columns to fields property.
    fields: { text: 'Name' }
});

listObj.appendTo('#listbox');

