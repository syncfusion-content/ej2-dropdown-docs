var userData = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
  mentionChar: '#',
  dataSource: userData,
  showMentionChar: true
});
mentionObj.appendTo('#mentionElement');
 

