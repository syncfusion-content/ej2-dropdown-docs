// define the array of object
var data = [
    { text: 'Account Settings', id: 'list-01', iconCss: 'e-list-icons e-list-user-settings' },
    { text: 'Address Book', id: 'list-02', iconCss: 'e-list-icons e-list-address-book' },
    { text: 'Delete', id: 'list-03', iconCss: 'e-list-icons e-list-delete' },
    { text: 'Forward', id: 'list-04', iconCss: 'e-list-icons e-list-forward' },
    { text: 'Reply', id: 'list-05', iconCss: 'e-list-icons e-list-reply' },
    { text: 'Reply All', id: 'list-06', iconCss: 'e-list-icons e-list-reply-all' },
    { text: 'Save All Attachments', id: 'list-07', iconCss: 'e-list-icons e-list-save-all-attachments' },
    { text: 'Save As', id: 'list-08', iconCss: 'e-list-icons e-list-icon-save-as' },
    { text: 'Touch/Mouse Mode', id: 'list-09', iconCss: 'e-list-icons e-list-touch' },
    { text: 'Undo', id: 'list-10', iconCss: ' e-list-icons e-list-undo' }
];

// initialize ListBox component
var listObj = new ej.dropdowns.ListBox({
    //set the data to dataSource property
    dataSource: data,
    fields: { text: 'text', iconCss: 'iconCss'}
});
listObj.appendTo('#listbox');

