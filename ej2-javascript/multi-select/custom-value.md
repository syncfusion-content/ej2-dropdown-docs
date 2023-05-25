---
layout: post
title: Custom value in ##Platform_Name## Multi select control | Syncfusion
description: Learn here all about Custom value in Syncfusion ##Platform_Name## Multi select control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom value 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom value in ##Platform_Name## Multi select control

The MultiSelect allows user to add a new non-present option to the component value when [`allowCustomValue`](../api/multi-select/#allowcustomvalue) is enabled. while selecting the new custom value [`customValueSelection`](../api/multi-select/#customvalueselection) event will be triggered.

The following sample demonstrates configuration of custom value support with the MultiSelect component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/basic-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/basic-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs5" %}
{% endif %}
