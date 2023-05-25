---
layout: post
title: Dual list box in ##Platform_Name## List box control | Syncfusion
description: Learn here all about Dual list box in Syncfusion ##Platform_Name## List box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dual list box 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dual list box in ##Platform_Name## List box control

The dual list box allows the user to move items between two list boxes by clicking the toolbar buttons. Dual list box can be created by listing items in the [`toolbarSettings`](../api/list-box/#toolbarsettings) along with the `scope` property.

The following operations can be performed in dual list box,

| Options | Description |
|------|-------------|
| moveUp | Move the selected item in the upward direction within the list box. |
| moveDown | Move the selected item in the downward direction within the list box. |
| moveTo |  Move the selected item to the another list box. |
| moveFrom | Move the selected item from one list box to the another list box. |
| moveAllTo | Move all the items to the another list box. |
| moveAllFrom |  Move all the items from one list box to the another list box. |

The following example illustrates how to move items from `Group A` to `Group B` list box.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/list-box/dual-list-box-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/dual-list-box-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/dual-list-box-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/list-box/dual-list-box-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/list-box/dual-list-box-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/list-box/dual-list-box-cs1" %}
{% endif %}