 // create local data
var data = [
        'Aeróbics',
        'Aeróbics en Agua',
        'Aerografía',
        'Aeromodelaje',
        'Águilas',
        'Ajedrez',
        'Ala Delta',
        'Álbumes de Música',
        'Alusivos',
        'Análisis de Escritura a Mano'];
    // initialize DropDownList component
var ddlObj = new ej.dropdowns.DropDownList({
        //set the local data to dataSource property
        dataSource: data,
        // set the placeholder to DropDownList input element
        placeholder: 'Select a value',
        // enabled the ignoreAccent property for ignore the diacritics
        ignoreAccent: true,
        // set true for enable the filtering support.
        allowFiltering: true,
        filterBarPlaceholder: 'e.g: aero'
  });
ddlObj.appendTo('#ddlelement');

