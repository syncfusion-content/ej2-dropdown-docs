   var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
   // initialize MultiSelect component
    var listObj = new ej.dropdowns.MultiSelect({
        dataSource: sportsData,
        // set placeholder to MultiSelect input element
        placeholder: "Select games"});
    listObj.appendTo('#select');

