---
layout: post
title: Value binding in ##Platform_Name## DropDown List control | Syncfusion
description: Learn here all about Value binding in Syncfusion ##Platform_Name## DropDown List control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Value binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Value binding in DropDown List

Value binding in the DropDown List control allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The DropDown List component provides flexibility in binding both primitive data types and complex objects.

## Primitive Data Types

The DropDown List control provides flexible binding capabilities for primitive data types like strings and numbers. You can effortlessly bind local primitive data arrays, fetch and bind data from remote sources, and even custom data binding to suit specific requirements. Bind the value of primitive data to the [value](../api/drop-down-list/#value) property of the DropDown List.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample shows the example for preselect values for primitive data type

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/primitive/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/primitive/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/primitive" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/primitive/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/primitive/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/primitive" %}
{% endif %}

## Object Data Types

In the DropDown List control, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](../api/drop-down-list/#allowobjectbinding) is enabled, the value of the control will be an object of the same type as the selected item in the [value](../api/drop-down-list/#value) property. This feature seamlessly binds arrays of objects, whether sourced locally, retrieved from remote endpoints, or customized to suit specific application needs.

The following sample shows the example for preselect values for object data type

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/objectvalue/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/objectvalue/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/objectvalue" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/objectvalue/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/objectvalue/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/objectvalue" %}
{% endif %}

> Since the `value` property supports object data types, it's necessary to provide the appropriate type wherever the `value` property is utilized.