---
layout: post
title: Tags in ##Platform_Name## Combo box control | Syncfusion
description: Learn here all about Tags in Syncfusion ##Platform_Name## Combo box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tags 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tags in ##Platform_Name## Combo box control

The ComboBox can be initialized on three different tags as described in below. Though it is initialized in different tags, the UI appearance and built-in features behave in the same way.

## Select element

When a ComboBox is initialized on SELECT element, the list items can be assigned through the option tag of the HTML select element.

* The nested items are wrapped and grouped based on the `<optgroup>` tag that is available within the `<select>` element, by default.
* You can preselect the option by setting the `selected` attribute to an option tag.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/select-element-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/select-element-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/select-element-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/select-element-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/select-element-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/select-element-cs2" %}
{% endif %}

## UL element

The ComboBox can be initialized through `<UL>` element which contains a collection of `<LI>` element. The `<LI>` items act as a popup list items of the ComboBox. The inner text of the `<LI>` element is considered both as text and value fields.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/ul-element-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/ul-element-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/ul-element-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/ul-element-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/ul-element-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/ul-element-cs1" %}
{% endif %}

## Input element

The ComboBox has also be rendered through `<input>` element with an array of either simple or complex data that is set through the [dataSource](../api/combo-box/#datasource) &nbsp;property. It can retrieve data from local data sources as well as remote data services.

Detailed information about the data binding with an example is available in: [Data Binding to ComboBox](./data-binding)