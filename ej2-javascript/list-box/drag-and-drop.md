---
layout: post
title: Drag and drop in ##Platform_Name## List box control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion ##Platform_Name## List box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drag and drop 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in ##Platform_Name## List box control

The ListBox has support to drag an item or a group of selected items and drop it within the same list box or into another list box.

The elements can be customized on drag and drop by using the following events,

| Events | Description |
|------|------|-------------|
| [`dragStart`](../api/list-box/#dragstart) | Triggers when the selected element is being dragged. |
| [`drag`](../api/list-box/#drag) | Triggers when the selected element is being dragged. |
| [`drop`](../api/list-box/#drop) | Triggers when the selected element is being dropped. |

## Single listbox

To drag and drop an item or group of item within the list box can be achieved by setting [`allowDragAndDrop`](../api/list-box/#allowdraganddrop) property as `true`.

The following sample illustrates how to drag and drop an item within the same list box by enabling `allowDragAndDrop` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/remote-data-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/remote-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/remote-data-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/remote-data-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/remote-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/remote-data-cs2" %}
{% endif %}

## Multiple listbox

To drag and drop an item or group of item between two list boxes can be achieved by setting `allowDragAndDrop` property as `true` and [`scope`](../api/list-box/#scope) property should be set to both the list boxes.

In the following sample, the `allowDragAndDrop` property is set as `true` and `scope` is set as `combined-list` to enable drop and drop in both list boxes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/multiple-list-box-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/multiple-list-box-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/multiple-list-box-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/multiple-list-box-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/multiple-list-box-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/multiple-list-box-cs1" %}
{% endif %}

## See Also

* [How to reorder the items in the list box](./dual-list-box#dual-list-box)