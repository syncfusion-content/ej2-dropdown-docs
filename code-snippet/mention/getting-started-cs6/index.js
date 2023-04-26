var emailData = [
  { Name: "Selma Rose", EmailId: "selma@gmail.com" },
  { Name: "Maria", EmailId: "maria@gmail.com" },
  { Name: "Russo Kay", EmailId: "russo@gmail.com" },
  { Name: "Robert", EmailId: "robert@gmail.com" },
  { Name: "Camden Kate",EmailId: "camden@gmail.com" },
  { Name: "Garth", EmailId: "garth@gmail.com" },
  { Name: "Andrew James", EmailId: "james@gmail.com" },
  { Name: "Olivia", EmailId: "olivia@gmail.com" },
  { Name: "Sophia", EmailId: "sophia@gmail.com" },
  { Name: "Margaret", EmailId: "margaret@gmail.com" }, 
  { Name: "Ursula Ann", EmailId: "ursula@gmail.com" },
  { Name: "Laura Grace", EmailId: "laura@gmail.com" },
  { Name: "Albert", EmailId: "albert@gmail.com" },
  { Name: "William", EmailId: "william@gmail.com" }
];
// initialize Mention component
var mentionObj = new ej.dropdowns.Mention({
  dataSource: emailData,
  fields: { text: 'Name' },
  suggestionCount: 8
});
mentionObj.appendTo('#mentionElement');
 

