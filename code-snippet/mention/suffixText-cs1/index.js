var sportsData = [
    { Id: 'game1', Game: 'Badminton' },
    { Id: 'game2', Game: 'Football' },
    { Id: 'game3', Game: 'Tennis' },
    { Id: 'game4', Game: 'Hockey' },
    { Id: 'game5', Game: 'Basketball' }
];
// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
  dataSource: sportsData,
  // maps the appropriate column to fields property
  fields: { text: 'Game', value: 'Id' },
  suffixText: '&nbsp;'
});
mentionObj.appendTo('#mentionElement');
 

