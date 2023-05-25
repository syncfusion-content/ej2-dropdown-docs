   var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
   // initialize MultiSelect component
    var listObj = new ej.dropdowns.MultiSelect({
        dataSource: sportsData,
        popupHeight: '200px',
        //set width to popup list
        popupWidth: '250px',
        // set placeholder to MultiSelect input element
        placeholder: "Select games"});
    listObj.appendTo('#select');

