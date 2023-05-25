// define the array of object
var data = [
    { text: 'Hennessey Venom' },
    { text: 'Bugatti Chiron' },
    { text: 'Koenigsegg CCR' },
    { text: 'McLaren F1' },
    { text: 'Aston Martin One- 77' },
    { text: 'Jaguar XJ220' },
    { text: 'McLaren P1' },
    { text: 'Ferrari LaFerrari' }
];

// initialize ListBox component
var listObj = new ej.dropdowns.ListBox({
    //set the data to dataSource property
    dataSource: data
});
listObj.appendTo('#listbox');

var buttonObj = new ej.buttons.Button({
   isPrimary: true,
   content: 'Submit'
});
buttonObj.appendTo('#btnElement');



