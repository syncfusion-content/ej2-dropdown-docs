var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
   // initialize ComboBox component
    var listObj = new ej.dropdowns.ComboBox({
        dataSource: sportsData, 
        // set placeholder to ComboBox input element
        placeholder: "Select games"});
    listObj.appendTo('#comboelement');
 

