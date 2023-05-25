// define array of string
var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis', 'Basket Ball', 'Base Ball', 'Hockey', 'Volley Ball'];

// initialize ListBox component
var listObj = new ej.dropdowns.ListBox({
    //set the data to dataSource property
    dataSource: sportsData
});

listObj.appendTo('#listbox');

