 // initialize MultiSelect component
    var listObj1 = new ej.dropdowns.MultiSelect({
        // set the placeholder to MultiSelect input element
        placeholder: 'Favorite Sports',
        // set the type of mode for how to visualized the selected items in input element.
        mode: 'Default'
    });
    listObj1.appendTo('#default');
      var buttonFormValidate = new ej.buttons.Button({
        isPrimary: true
    });
    buttonFormValidate.appendTo('#validateSubmit');
    // Initialize the Reset Button.
    var buttonReset = new ej.buttons.Button({});
    buttonReset.appendTo('#resetbtn');

    var options = {
        rules: {
            default: { required: true }
        },
     customPlacement: (inputElement, error)=>{
        inputElement.parentElement.parentElement.parentElement.insertBefore(error, inputElement.parentElement.parentElement.nextSibling);
     }
    };
    // Initialize the FormValidator.
    var formObj = new ej.inputs.FormValidator('#formId', options);
    document.getElementById('formId').addEventListener("submit", function (e) {
        e.preventDefault();
        if (formObj.validate()) {
            alert('Success');
            formObj.reset();
        }
    });


