

import { DropDownTree } from '@syncfusion/ej2-dropdowns';

//define the array of JSON
let data: { [key: string]: Object }[] = [
    {
        nodeId: '01', nodeText: 'Music',
        nodeChild: [
            { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
        ]
    },
    {
        nodeId: '02', nodeText: 'Videos', expanded: true,
        nodeChild: [
            { nodeId: '02-01', nodeText: 'Naturals.mp4' },
            { nodeId: '02-02', nodeText: 'Wild.mpeg' },
        ]
    },
    {
        nodeId: '03', nodeText: 'Documents',
        nodeChild: [
            { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
            { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
            { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
            { nodeId: '03-04', nodeText: 'Social Network.pdf' },
            { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
        ]
    },
];

// initialize Dropdown Tree control
let DropDownTreeObject: DropDownTree = new DropDownTree({
    //binding data source through fields property
    fields: { dataSource: data, value: 'nodeId', text: 'nodeText', child: 'nodeChild' }
    // set placeholder to Dropdown Tree input element
    placeholder: "Select a Item"
});

// render initialized Dropdown Tree
DropDownTreeObject.appendTo('#ddltreeelement');


