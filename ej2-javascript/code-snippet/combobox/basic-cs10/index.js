//bind the data manager instance to dataSource property
var customerData = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true
});
//initiates the component
var comboBoxObject =  new ej.dropdowns.ComboBox({
    //set the data to dataSource property
    dataSource: customerData,
    // set locale culture to ComboBox
    locale: 'fr-BE',
    // map appropriate column
    fields: { text: 'ContactName', value: 'CustomerID' },
    // take 0 item to showcase noRecordsTemplate property.
    query: new ej.data.Query().select(['ContactName', 'CustomerID']).take(0),
    // set placeholder to ComboBox input element
    placeholder: 'Sélectionnez un éléments'
});
comboBoxObject.appendTo('#comboelement');

ej.base.L10n.load({
    'fr-BE': {
       'dropdowns': {
             'noRecordsTemplate': "Aucun enregistrement trouvé",
             'actionFailureTemplate': "Modèle d'échec d'action"
         }
     }
});

