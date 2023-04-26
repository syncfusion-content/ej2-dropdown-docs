var countryData = [
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

//initiates the component
var listObj = new ej.dropdowns.ListBox({
    dataSource: countryData,
    fields: { text: 'Name' },
    sortOrder: 'Descending'
});

listObj.appendTo('#listbox');

