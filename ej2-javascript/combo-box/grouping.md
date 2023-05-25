---
layout: post
title: Grouping in ##Platform_Name## Combo box control | Syncfusion
description: Learn here all about Grouping in Syncfusion ##Platform_Name## Combo box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Grouping 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in ##Platform_Name## Combo box control

The ComboBox supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](../api/combo-box/#fields) &nbsp;field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

In the following sample, vegetables are grouped according on its category using `groupBy` field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/basic-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/basic-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/basic-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/basic-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/basic-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/basic-cs9" %}
{% endif %}

## HTML select

The ComboBox also supports grouping of list items under specific groups by initiating the `<select>` element using  `optgroup`. The nested items are wrapped based on the `<optgroup>` tag that is presents in the `<select>` element

```
    <select id="selectElement">
        <optgroup label="Beans">
            <option value="1">Chickpea</option>
            <option value="2">Green bean</option>
            <option value="3" selected="selected">Horse gram</option>
        </optgroup>
        <optgroup label="Leafy and Salad">
            <option value="4">Spinach</option>
            <option value="5">Cabbage</option>
            <option value="6">Wheat grass</option>
            <option value="7">Yarrow</option>
        </optgroup>
    </select>
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/combobox/select-element-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/select-element-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/select-element-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/combobox/select-element-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/combobox/select-element-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/combobox/select-element-cs1" %}
{% endif %}

## Customization

The grouping header is also provided with customization option. This allows custom designing using the [`groupTemplate`](../api/combo-box/#grouptemplate) property for both inline and fixed headers.

## See Also

* [Group Template support to ComboBox](./templates/#group-template).
