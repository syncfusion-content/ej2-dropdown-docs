//Initialize DropDownList component
var listObj = new ej.dropdowns.DropDownList({
    // define the array of JSON data
    dataSource: [
        { id: '1', text: 'Australia', content: 'National sports is Cricket' },
        { id: '2', text: 'Bhutan', content: 'National sports is Archery' },
        { id: '3', text: 'China', content: 'National sports is Table Tennis' },
        { id: '4', text: 'Cuba', content: 'National sports is Baseball' },
        { id: '5', text: 'India', content: 'National sports is Hockey' },
        { id: '6', text: 'Spain', content: 'National sports is Football' },
        { id: '7', text: 'United States', content: 'National sports is Baseball' }
    ],
    // map the appropriate column to fields property
    fields: { text: 'text', tooltip: 'id' },
    // set the placeholder to the DropDownList input
    placeholder: 'Select a country',
    // bind the DropDownList close event
    close: () => { tooltip.close(); }
});
listObj.appendTo('#ddltooltip');
//Initialize Tooltip component
var tooltip = new ej.popups.Tooltip({
    // default content of tooltip
    content: 'Loading...',
    // set target element to tooltip
    target: '.e-list-item',
    // set position of tooltip
    position: 'top center',
    // bind beforeRender event
    beforeRender: onBeforeRender
});
tooltip.appendTo('body');
function onBeforeRender(args) {
    // get the target element
    var listElement = document.getElementById('ddltooltip');
    var result = listElement.ej2_instances[0].dataSource;
    var i;
    for (i = 0; i < result.length; i++) {
        if (result[i].text === args.target.textContent) {
            this.content = result[i].content;
            this.dataBind();
            break;
        }
    }
}

