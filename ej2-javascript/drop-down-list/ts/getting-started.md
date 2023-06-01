---
layout: post
title: Getting started with ##Platform_Name## Drop down list control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Drop down list control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Drop down list control

This section explains how to create a simple **DropDownList** component and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

## Dependencies

The following list of dependencies are required to use the DropDownList component in your application.

```javascript
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Set up of the development environment

To get started with the DropDownList component, you have to clone the Essential JS 2 [`quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project and install the npm packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

>The [project](https://github.com/syncfusion/ej2-quickstart.git) is preconfigured with common settings (`src/styles/styles.css`, `system.config.js` ) to start all the Essential JS 2 components.

## Initialize the DropDownList

The DropDownList can be initialized through three different tags as described in the [Initialize Tags](/drop-down-list/tags/).

Add the HTML input element that needs to be initialized as a DropDownList in `index.html`.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 DropDownList component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div id='container' style="margin:0 auto; width:300px;">
        <!--element which is going to render the DropDownList-->
        <input type="text" tabindex="1" id='ddlelement' />
    </div>

</body>

</html>
```

Now, import the  DropDownList component to your `app.ts` and initialize it to the element `#ddlelement` as shown below.

`[src/app/app.ts]`

```ts

import { DropDownList } from '@syncfusion/ej2-dropdowns';

// initialize DropDownList component
let dropDownListObject: DropDownList = new DropDownList();

// render initialized DropDownList
dropDownListObject.appendTo('#ddlelement');

```

## Binding data source

After initialization, populate the DropDownList with data using the [dataSource](/api/drop-down-list/#datasource) &nbsp;property. Here, an array of string values is passed to the DropDownList component.

```ts
import { DropDownList } from '@syncfusion/ej2-dropdowns';

// define the array of data
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];

// initialize DropDownList component
let dropDownListObject: DropDownList = new DropDownList({
    //set the data to dataSource property
    dataSource: sportsData
});

// render initialized DropDownList
dropDownListObject.appendTo('#ddlelement');
```

## Run the application

After completing the configuration required to render a basic DropDownList, run the following command to display the output in your default browser.

```
npm run start
```

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dropdownlist/getting-started-cs3" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the DropDownList input element's width, and the height of the popup list has '300px'.

The height and width of the popup list can also be customized using the [popupHeight](/api/drop-down-list/#popupheight) &nbsp;and [popupWidth](/api/drop-down-list/#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dropdownlist/getting-started-cs4" %}

## See Also

* [How to bind the data](./data-binding)
* [How to initialize the control using different tags](./tags)