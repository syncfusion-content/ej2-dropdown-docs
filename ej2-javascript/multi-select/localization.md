---
layout: post
title: Localization in ##Platform_Name## Multi select control | Syncfusion
description: Learn here all about Localization in Syncfusion ##Platform_Name## Multi select control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Localization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Localization in ##Platform_Name## Multi select control

The Localization library allows you to localize static text content of the [noRecordsTemplate](../api/multi-select/#norecordstemplate) and [actionFailureTemplate](../api/multi-select/#actionfailuretemplate) &nbsp;properties according to the culture currently assigned to the MultiSelect.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |
| actionFailureTemplate | The request failed |

## Loading translations

To load translation object to your application, use load function of the **L10n** class.

In the following sample, French culture is set to the MultiSelect and no data is loaded. Hence, the [`noRecordsTemplate`](../api/multi-select/#norecordstemplate) property displays its text in French culture initially, and if the sample is run offline, the [`actionFailureTemplate`](../api/multi-select/#actionfailuretemplate) property displays its text appropriately.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multiselect/basic-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multiselect/basic-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multiselect/basic-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multiselect/basic-cs16" %}
{% endif %}

## See Also

* [Accessibility](./accessibility)
* [How to bind the data to the combobox](./data-binding)