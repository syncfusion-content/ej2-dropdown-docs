var sportsData = [ "Basketball", "Cricket", "Football", "Golf"];
//initiates the component
var ddlObject = new ej.dropdowns.DropDownList({
    //bind the data manager instance to dataSource property
    dataSource: sportsData ,
    //set the placeholder to DropDownList input
    placeholder:"Select games",
    //set the value to footer template
    footerTemplate:"<span class='foot'> Total list items: "+ sportsData.length +"</span>"
});
 
//render the component
ddlObject.appendTo('#ddlelement');

