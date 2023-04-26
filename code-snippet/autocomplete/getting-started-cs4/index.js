var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
   // initialize AutoComplete component
    var listObj = new ej.dropdowns.AutoComplete({
        dataSource: sportsData, 
        // set placeholder to AutoComplete input element
        placeholder: "Select games"});
    listObj.appendTo('#atcelement');
 

