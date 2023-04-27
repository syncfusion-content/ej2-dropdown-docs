// define the array of object
var data = [
    { text: 'JavaScript', pic: 'javascript', description: 'It is a lightweight interpreted or JIT-compiled programming language.' },
    { text: 'TypeScript', pic: 'typeScript', description: 'It is a typed superset of Javascript that compiles to plain JavaScript.' },
    { text: 'Angular', pic: 'angular', description: 'It is a TypeScript-based open-source web application framework.' },
    { text: 'React', pic: 'react', description: 'A JavaScript library for building user interfaces. It can also render on the server using Node.' },
    { text: 'Vue', pic: 'vue', description: 'A progressive framework for building user interfaces. it is incrementally adoptable.' }
];

// initialize ListBox component
var listObj = new ej.dropdowns.ListBox({
    //set the data to dataSource property
    dataSource: data,
    itemTemplate: '<div class="list-wrapper">' +
    '<span class="${pic} e-avatar e-avatar-xlarge e-avatar-circle"></span>' +
    '<span class="text">${text}</span><span class="description">' +
    '${description}</span></div>'
});
listObj.appendTo('#listbox');


