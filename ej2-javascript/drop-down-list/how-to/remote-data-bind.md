---
layout: post
title: Remote data bind in ##Platform_Name## Drop down list control | Syncfusion
description: Learn here all about Remote data bind in Syncfusion ##Platform_Name## Drop down list control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Remote data bind 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Remote data bind in ##Platform_Name## Drop down list control

Before component rendering, you can get the total items count by using [actionComplete](../../api/drop-down-list/#actioncomplete) &nbsp;event with its result arguments. After rendering this component, you can get the total items count by using [getItems](../../api/drop-down-list/#getitems) method.

The following example demonstrate how to get the total items count.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdownlist/how-to/get-count-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/get-count-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/get-count-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dropdownlist/how-to/get-count-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdownlist/how-to/get-count-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdownlist/how-to/get-count-cs1" %}
{% endif %}