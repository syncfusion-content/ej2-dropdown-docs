let sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
   // initialize AutoComplete component
    var listObj = new ej.dropdowns.AutoComplete({
      //set the data to dataSource property
        dataSource: sportsData, 
        //set width to suggestion list
         popupWidth: '250px',
        // set the popup list height
        popupHeight: "250px",
        // set placeholder to AutoComplete input element
        placeholder: "Find a game"});
    listObj.appendTo('#atcelement'); 

