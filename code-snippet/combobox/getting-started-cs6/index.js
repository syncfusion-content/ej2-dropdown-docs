let sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
   // initialize ComboBox component
    var listObj = new ej.dropdowns.ComboBox({
      //set the data to dataSource property
        dataSource: sportsData, 
        //set width to suggestion list
         popupWidth: '250px',
        // set the popup list height
        popupHeight: "250px",
        // set placeholder to ComboBox input element
        placeholder: "Find a game"});
    listObj.appendTo('#comboelement'); 

