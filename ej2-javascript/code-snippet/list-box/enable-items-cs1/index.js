// define the array of object
var data = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' }
];

// initialize ListBox component
var listObj = new ej.dropdowns.ListBox({
    //set the data to dataSource property
    dataSource: data,
    created: function() {
        listObj.enableItems(['Bugatti Veyron Super Sport', 'SSC Ultimate Aero'], false);
    }
});
listObj.appendTo('#listbox');

document.getElementById('enableitem').onclick = function () {
    listObj.enableItems(['Bugatti Veyron Super Sport', 'SSC Ultimate Aero']);
}

