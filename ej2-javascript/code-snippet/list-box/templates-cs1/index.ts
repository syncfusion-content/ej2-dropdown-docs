


import { ListBox  } from '@syncfusion/ej2-dropdowns';

// dataSource definition
let data: { [key: string]: Object; }[] =  [
    { text: 'JavaScript', pic: 'javascript', description: 'It is a lightweight interpreted or JIT-compiled programming language.' },
    { text: 'TypeScript', pic: 'typeScript', description: 'It is a typed superset of Javascript that compiles to plain JavaScript.' },
    { text: 'Angular', pic: 'angular', description: 'It is a TypeScript-based open-source web application framework.' },
    { text: 'React', pic: 'react', description: 'A JavaScript library for building user interfaces. It can also render on the server using Node.' },
    { text: 'Vue', pic: 'vue', description: 'A progressive framework for building user interfaces. it is incrementally adoptable.' }
];

// initialize ListBox component
let listBoxObj: ListBox = new ListBox({
    // Set the data source property.
    dataSource: data,
    // set the template content for list items
    itemTemplate:  '<div class="list-wrapper">' +
    '<span class="${pic} e-avatar e-avatar-xlarge e-avatar-circle"></span>' +
    '<span class="text">${text}</span><span class="description">' +
    '${description}</span></div>'
});
listBoxObj.appendTo('#listbox');



