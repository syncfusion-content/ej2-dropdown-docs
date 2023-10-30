---
layout: post
title: Getting started with ##Platform_Name## Mention control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Mention control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Mention control

This section explains how to create a `Mention`, and configure its available functionalities in TypeScript using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the Mention control in your application.

```js

|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
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

To render Mention control, need to import dropdowns and its dependent controls styles as given below in the `~/src/styles/styles.css` file, as shown below:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.css";

{% endhighlight %}
{% endtabs %}

## Adding the Mention control to the application

Open the application in Visual Studio Code and add the Syncfusion JavaScript UI controls.

Add the HTML div tag with the `id` attribute as `mentionElement` to your `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">


<head>
    <title>Essential JS 2 Mention control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>


<body>
    <div id='container' style="width:200px;">
        <!--element which is the Mention target to list the suggestions-->
        <label style="font-size: 15px; font-weight: 600;">Comments</label>
        <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
    </div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Import the Mention control in your `app.ts` file and initialize it with the `#mentionElement`.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Mention } from '@syncfusion/ej2-dropdowns';

// initialize Mention control
let mentionObject: Mention = new Mention({});

// render initialized Mention
mentionObject.appendTo('#mentionElement');

{% endhighlight %}
{% endtabs %}

## Binding the data source

After initialization, populate the Mention with data using the [dataSource](../api/mention/#datasource) property. Here, an array of string values is passed to the Mention control.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Mention } from '@syncfusion/ej2-dropdowns';

// define the array of data
let userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];

// initialize Mention control
let mentionObject: Mention = new Mention({
    //set the data to dataSource property
    dataSource: userData
});

// render initialized Mention
mentionObject.appendTo('#mentionElement');

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example, shows a basic Mention control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/mention/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs9" %}

## Display mention character

By using the [showMentionChar](../api/mention/#showmentionchar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](../api/mention/#mentionchar) property in the Mention control.

> By default, the [mentionChar](../api/mention/#mentionchar) is `@` and the [showMentionChar](../api/mention/#showmentionchar) property is disabled.

The following example, displays the text content along with the mention character configured as `#`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/mention/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/mention/getting-started-cs10" %}
