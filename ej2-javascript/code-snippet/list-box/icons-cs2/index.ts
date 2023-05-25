


import { ListBox, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';

ListBox.Inject(CheckBoxSelection);

// define the array of object
let data: { [key: string]: Object }[] = [
    { text: 'Account Settings', iconCss: 'e-list-icons e-list-user-settings' },
    { text: 'Address Book', iconCss: 'e-list-icons e-list-address-book' },
    { text: 'Delete', iconCss: 'e-list-icons e-list-delete' },
    { text: 'Forward', iconCss: 'e-list-icons e-list-forward' },
    { text: 'Reply', iconCss: 'e-list-icons e-list-reply' },
    { text: 'Reply All', iconCss: 'e-list-icons e-list-reply-all' },
    { text: 'Save All Attachments', iconCss: 'e-list-icons e-list-save-all-attachments' },
    { text: 'Save As', iconCss: 'e-list-icons e-list-icon-save-as' },
    { text: 'Touch/Mouse Mode', iconCss: 'e-list-icons e-list-touch' },
    { text: 'Undo', iconCss: ' e-list-icons e-list-undo' }
];

// initialize ListBox component
let listObj: ListBox = new ListBox({
    //set the data to dataSource property
    dataSource: data,
    fields: { text: 'text', iconCss: 'iconCss'}
});
listObj.appendTo('#listbox');



