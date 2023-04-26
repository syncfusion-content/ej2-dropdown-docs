var sportsData = [ "Basketball", "Cricket", "Football", "Golf"];
//initiates the component
var msObject = new ej.dropdowns.MultiSelect({
    //bind the data manager instance to dataSource property
    dataSource: sportsData ,
    //set the placeholder to MultiSelect input
    placeholder:"Select games",
    //set the value to footer template
    footerTemplate:"<span class='foot'> Total list items: "+ sportsData.length +"</span>"
});

//render the component
msObject.appendTo('#select');


