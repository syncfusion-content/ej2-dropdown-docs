var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
// initialize DropDownList component
var dropDownListObject = new ej.dropdowns.DropDownList({
    //set the data to dataSource property
    dataSource: sportsData,
    // set placeholder to DropDownList input element
    placeholder: "Select a game",
    //enable the clear icon
    showClearButton: true
});
// render initialized DropDownList
dropDownListObject.appendTo('#ddlelement');
 
// Set null value to value property for clear the selected item
document.getElementById('btn').onclick = () => {
    dropDownListObject.value = null;
};

