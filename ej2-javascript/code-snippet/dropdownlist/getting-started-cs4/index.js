let sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
   // initialize DropDownList component
    var listObj = new ej.dropdowns.DropDownList({
      //set the data to dataSource property
        dataSource: sportsData, 
        //set width to suggestion list
         popupWidth: '250px',
        // set the popup list height
        popupHeight: "250px",
        // set placeholder to DropDownList input element
        placeholder: "Find a game"});
    listObj.appendTo('#ddlelement'); 

