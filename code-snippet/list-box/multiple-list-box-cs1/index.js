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

var groupB = [
    { "Name": "India", "Code": "IN" },
    { "Name": "Italy", "Code": "IT" },
    { "Name": "Japan", "Code": "JP" },
    { "Name": "Mexico", "Code": "MX" },
    { "Name": "Norway", "Code": "NO" },
    { "Name": "Poland", "Code": "PL" },
    { "Name": "Switzerland", "Code": "CH" },
    { "Name": "United Kingdom", "Code": "GB" },
    { "Name": "United States", "Code": "US" }
];

var listObj = new ej.dropdowns.ListBox({

    scope: 'combined-list',

    // Set the groupa data to the data source.
    dataSource: groupA,

    // Set allowDragAndDrop as `true`.
    allowDragAndDrop: true,

    height: '290px',

    // Map the appropriate columns to fields property.
    fields: { text: 'Name' }
});

listObj.appendTo('#listbox1');

listObj = new ej.dropdowns.ListBox({

    scope: 'combined-list',

    // Set the groupa data to the data source.
    dataSource: groupB,

    // Set allowDragAndDrop as `true`.
    allowDragAndDrop: true,

    height: '290px',

    // Map the appropriate columns to fields property.
    fields: { text: 'Name' }
});

listObj.appendTo('#listbox2');

