//bind the data manager instance to dataSource property
var customerData = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true
});

//initiates the component
var acObj =  new ej.dropdowns.AutoComplete({
    //set the data to dataSource property
    dataSource: customerData,
    // set locale culture to AutoComplete
    locale: 'fr-BE',
    // map appropriate column
    fields: { value: 'ContactName' },
    // take 0 item to showcase noRecordsTemplate property.
    query: new ej.data.Query().select(['ContactName', 'CustomerID']).take(0),
    // set placeholder to AutoComplete input element
    placeholder: 'Sélectionnez un éléments'
});
acObj.appendTo('#atcelement');

ej.base.L10n.load({
    'fr-BE': {
       'dropdowns': {
             'noRecordsTemplate': "Aucun enregistrement trouvé",
             'actionFailureTemplate': "Modèle d'échec d'action"
         }
     }
});

