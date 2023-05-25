


import { ComboBox } from '@syncfusion/ej2-dropdowns';

let sportsData = ["Football", "BasketBall", "Golf", "Cricket"];
//initiates the component
let ComboBoxObject: ComboBox = new ComboBox({
    //bind the data manager instance to dataSource property
    dataSource: sportsData ,
    //set the placeholder to ComboBox input
    placeholder:"Select a game",
    //sort the resulted items
    sortOrder: 'Ascending',
    //set the value to footer template
    footerTemplate:"<span class='foot'> Total list items: "+ sportsData.length +"</span>"
});

//render the component
ComboBoxObject.appendTo('#comboelement');



