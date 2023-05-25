var sportsData = [ "Basketball", "Cricket", "Football", "Golf"];
//initiates the component
var comboBoxObject = new ej.dropdowns.ComboBox({
    //bind the data manager instance to dataSource property
    dataSource: sportsData ,
    //set the placeholder to ComboBox input
    placeholder:"Select games",
    //set the value to footer template
    footerTemplate:"<span class='foot'> Total list items: "+ sportsData.length +"</span>"
});
 
//render the component
comboBoxObject.appendTo('#comboelement');

