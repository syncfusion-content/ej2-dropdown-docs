var sortFormatData= [
    { class: 'asc-sort', type: 'Sort A to Z', id: '1' },
    { class: 'dsc-sort', type: 'Sort Z to A ', id: '2' },
    { class: 'filter', type: 'Filter', id: '3' },
    { class: 'clear', type: 'Clear', id: '4' }
];

var sortFormat = new ej.dropdowns.MultiSelect({
    dataSource: sortFormatData,
    // map the icon column to iconCSS field.
    fields: { text: 'type', iconCss: 'class', value: 'id' },
    placeholder: 'Select a format'
});
sortFormat.appendTo('#select');


