


import { DropDownList } from '@syncfusion/ej2-dropdowns';

let sportsData = [ "Basketball", "Cricket", "Football", "Golf"];
//initiates the component
let DropDownListObject: DropDownList = new DropDownList({
    //bind the data manager instance to dataSource property
    dataSource: sportsData ,
    //set the placeholder to DropDownList input
    placeholder:"Select a game",
    //set the value to footer template
    footerTemplate:"<span class='foot'> Total list items: "+ sportsData.length +"</span>"
});

//render the component
DropDownListObject.appendTo('#ddlelement');



