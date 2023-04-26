

import { ComboBox } from '@syncfusion/ej2-dropdowns';

    // initialize ComboBox component
    let ComboBoxObject: ComboBox = new ComboBox({
        placeholder:"Select a vegetable",
        popupHeight: "200px"
    });

    // render initialized ComboBox
    ComboBoxObject.appendTo('#selectElement');


