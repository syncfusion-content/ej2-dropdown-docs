


import { AutoComplete, OpenEventArgs } from '@syncfusion/ej2-dropdowns';

let sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey'];
//initiates the component
let atcObject: AutoComplete = new AutoComplete({
    //bind the data manager instance to dataSource property
    dataSource: sportsData,
    //set the placeholder to AutoComplete input
    placeholder: "Find a game",
    open: (e: OpenEventArgs) => {
      let count = atcObject.getItems().length;
      //set the value to footerTemplate property
      let ele = document.getElementsByClassName('foot')[0];
      ele.innerHTML =  "Total list item: " + count;
    }
    //set the footer template
    footerTemplate: "<span class='foot'></span>"
});

//render the component
atcObject.appendTo('#atcelement');



