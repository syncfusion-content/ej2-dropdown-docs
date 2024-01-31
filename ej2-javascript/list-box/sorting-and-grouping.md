---
layout: post
title: Sorting and grouping in ##Platform_Name## List box control | Syncfusion
description: Learn here all about Sorting and grouping in Syncfusion ##Platform_Name## List box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Sorting and grouping 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sorting and grouping in ##Platform_Name## List box control

## Sorting

The ListBox supports sorting of available items in the alphabetical order that can be either ascending or descending. This can achieved using
[`sortOrder`](../api/list-box/#sortorder) property. Sort order can be `None`, `Ascending` or `Descending`.

In the following example, the `SortOrder` is set as `Descending`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/sorting-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/sorting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/sorting-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/sorting-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/sorting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/sorting-cs1" %}
{% endif %}

## Grouping

The ListBox supports to wrap the nested element into a group based on its category. The category of each list item can be mapped with
[`groupBy`](../api/list-box/fieldSettingsModel/#groupby) field in the data table.

In the following example, vegetables are grouped based on its category.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/sorting-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/sorting-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/sorting-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/sorting-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/sorting-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/sorting-cs2" %}
{% endif %}

### HTML element

The ListBox also supports grouping of list items under specific groups by initiating the `<select>` element using  `optgroup`. The nested items are wrapped based on the `<optgroup>` tag that is presents in the `<select>` element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/opt-group-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/opt-group-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/opt-group-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/opt-group-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/opt-group-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/opt-group-cs1" %}
{% endif %}

## See Also

* [How to bind the data source to the list box](./getting-started#binding-data-source)
* [How to initialize the list box](./getting-started#initialize-the-listbox)
