---
layout: post
title: Selection in ##Platform_Name## List box control | Syncfusion
description: Learn here all about Selection in Syncfusion ##Platform_Name## List box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Selection in ##Platform_Name## List box control

The ListBox provides support to select an item or a group of item by mouse or keyboard action. There are two selection modes available in list box,

* Single -  To select single item in the list box.
* Multiple -  To select multiple items in the list box.

On selection of each list box item, [`change`](../api/list-box/#change) event is triggered.

## Single selection

To enable single selection in the list box, [`mode`](../api/list-box/selectionSettingsModel/#mode) should be set as `Single` in[`selectionSettings`](../api/list-box/#selectionsettings) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/getting-started-cs3" %}
{% endif %}

## Multiple selection

To enable multiple selection in the list box, `mode` should be set as `Multiple` in `selectionSettings` property.

To select multiple items, use the SHIFT, CTRL, and arrow keys to make selections.

> By default, the selection mode is set as `Multiple`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/getting-started-cs4" %}
{% endif %}

### Checkbox selection

The ListBox supports checkbox in default and grouped list box which is used to select multiple items. CheckBox selection can be enabled by injecting `CheckBoxSelection` module and also [`showCheckBox`](../api/list-box/selectionSettingsModel/#showcheckbox) property should be set as `true`.

#### Select All

To select all the items in the list box, [`showSelectAll`](../api/list-box/selectionSettingsModel/#showselectall) should be set as `true`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/getting-started-cs5" %}
{% endif %}

> To select all the items in the list box, [`selectAll`](../api/list-box/#selectall) method can also be used.

## See Also

* [How to select items in list box](./icons-and-templates/#Select-items-to-the-list-box)