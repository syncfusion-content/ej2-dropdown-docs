var sportsData = [
    { Id: 'game1', Game: 'Badminton' },
    { Id: 'game2', Game: 'Football' },
    { Id: 'game3', Game: 'Tennis' }
];
//initiate the DropDownList
var dropDownListObject = new ej.dropdowns.DropDownList({
    // bind the sports Data to datasource property
    dataSource: sportsData,
    // maps the appropriate column to fields property
    fields: { text: 'Game', value: 'Id' },
    //set the placeholder to DropDownList input
    placeholder: "Select a game",
    // bind change event handler
    change: onChange
});
//render the component
dropDownListObject.appendTo('#ddlelement');
 
// Set value dynamically
document.getElementById('btn').onclick = () => {
    dropDownListObject.value = 'game3';
};
function onChange(args) {
    var element = document.createElement('p');
    if (args.isInteracted) {
        element.innerText = 'Changes happened by Interaction';
    }
    else {
        element.innerText = 'Changes happened by programmatic';
    }
    document.getElementById('event').append(element);
}

