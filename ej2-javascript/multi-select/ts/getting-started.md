---
layout: post
title: Getting started with ##Platform_Name## Multi select control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Multi select control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Multi select control

This section explains how to create a simple **MultiSelect** component and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the MultiSelect component in your application.

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

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

To render MultiSelect control, need to import dropdowns and its dependent controls styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Initialize the MultiSelect

The MultiSelect can be initialized through three different tags as described in the [Initialize Tags](../multi-select/tags/).

Add the HTML input element that needs to be initialized as a MultiSelect in `index.html`.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 MultiSelect component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id='container' style="margin:0 auto; width:300px;">
        <!--element which is going to render the MultiSelect-->
        <input type="text" tabindex="1" id='select' />
    </div>

</body>

</html>

{% endhighlight %}
{% endtabs %}

Now, import the  MultiSelect component to your `app.ts` and initialize it to the element `#select` as shown below.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { MultiSelect } from '@syncfusion/ej2-dropdowns';

// initialize MultiSelect component
let msObject: MultiSelect = new MultiSelect();

// render initialized MultiSelect
msObject.appendTo('#select');

{% endhighlight %}
{% endtabs %}

## Binding data source

After initialization, populate the MultiSelect with data using the [dataSource](https://ej2.syncfusion.com/documentation/api/multi-select#datasource) &nbsp;property. Here, an array of string values is passed to the MultiSelect component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { MultiSelect } from '@syncfusion/ej2-dropdowns';

// define the array of data
let sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];

// initialize MultiSelect component
let msObject: MultiSelect = new MultiSelect({
    //set the data to dataSource property
    dataSource: sportsData
});

// render initialized MultiSelect
msObject.appendTo('#select');

{% endhighlight %}
{% endtabs %}

## Run the application

After completing the configuration required to render a basic MultiSelect, run the following command to display the output in your default browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/multiselect/getting-started-cs3" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the MultiSelect input element's width, and the height auto adjust's according to the height of the popup list items.

The height and width of the popup list can also be customized using the [popupHeight](https://ej2.syncfusion.com/documentation/api/multi-select#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/documentation/api/multi-select#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/multiselect/getting-started-cs4" %}

## See Also

* [How to bind the data](./data-binding)
* [How to initialize the control using different tags](./tags)