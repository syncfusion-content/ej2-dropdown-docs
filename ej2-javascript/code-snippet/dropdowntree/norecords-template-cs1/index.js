var data = [];
var ddtreeObj = new ej.dropdowns.DropDownTree({
    fields: { dataSource: data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
    noRecordsTemplate: "<span class='norecord'> NO DATA AVAILABLE</span>",
    width: '100%',
    placeholder: 'Select an employee',
    popupHeight: '250px'
});
ddtreeObj.appendTo('#template');

