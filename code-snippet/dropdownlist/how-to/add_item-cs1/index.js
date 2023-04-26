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
    placeholder: "Select a game"
});
//render the component
dropDownListObject.appendTo('#ddlelement');
 
// add item at first
document.getElementById('first').onclick = () => {
    dropDownListObject.addItem({ Id: 'game0', Game: 'Hockey' }, 0);
};
// add item in between
document.getElementById('between').onclick = () => {
    dropDownListObject.addItem({ Id: 'game4', Game: 'Golf' }, 2);
};
// add item at last
document.getElementById('last').onclick = () => {
    dropDownListObject.addItem({ Id: 'game5', Game: 'Cricket' });
};


