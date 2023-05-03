var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
// initialize DropDownList component
var dropDownListObject = new ej.dropdowns.DropDownList({
    //set the data to dataSource property
    dataSource: sportsData,
    // set placeholder to DropDownList input element
    placeholder: "Select a game"
});
// render initialized DropDownList
dropDownListObject.appendTo('#ddlelement');
 
// bind the onscroll event to window
window.onscroll = () => {
    dropDownListObject.hidePopup();
};

