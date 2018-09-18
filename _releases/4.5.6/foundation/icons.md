---
title: "Icons"
---


<div class="pl-pattern">
### Overview

#### About Font Awesome 5

* Font Awesome 5 is a SVG-based framework that gives you all the benefits of using SVG icons on the web.
* Font Awesome on [GitHub](https://github.com/FortAwesome/Font-Awesome).
* A complete list of available icons is available in the [icon gallery](https://fontawesome.com/icons?d=gallery&m=free).

</div>


<div class="pl-pattern">
### Usage

* Add Font Awesome 5 to your project by either using the version included in this UI Library, or from [https://fontawesome.com/get-started/advanced-options](https://fontawesome.com/get-started/advanced-options).
* The USPTO recommends using the [SVG with JS](https://fontawesome.com/get-started/svg-with-js) method for the greatest design flexibility.
* Add your icons and include <code>.fas</code> to ensure SVG with JS is being used.
* Full capabilities documentation can be viewed on the [Font Awesome help pages](https://fontawesome.com/how-to-use/svg-with-js).

{::nomarkdown}
<div class="pl-preview">
    <i class="fas fa-images text-primary fa-5x"></i>
</div>
{:/nomarkdown}

{% highlight html %}
        <i class="fas fa-images text-primary fa-5x"></i>
{% endhighlight %}

</div>


<div class="pl-pattern">
### Icon color

Font Awesome 5 icons automatically inherit the color of the associated class or container around them.

* Use either a colored circle with a white icon, or a colored icon; not both together. If necessary, you may use a dark circle to add emphasis to warning icons. 
* Always ensure final icon usage is 508 compliant for color contrast.

{::nomarkdown}
<div class="pl-preview">
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-primary"><i class="fas fa-cloud fa-2x"></i></span><div>Primary</div><div class="text-muted">.text-primary</div></div>
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-info"><i class="fas fa-bell fa-2x"></i></span><div>Info</div><div class="text-muted">.text-info</div></div>
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-success"><i class="fas fa-check-circle fa-2x"></i></span><div>Success</div><div class="text-muted">.text-success</div></div>
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-warning"><i class="fas fa-exclamation-triangle fa-2x"></i></span><div>Warning</div><div class="text-muted">.text-warning</div></div>
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-danger"><i class="fas fa-exclamation fa-2x"></i></span><div>Danger</div><div class="text-muted">.text-danger</div></div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-primary"><i class="fas fa-cloud fa-2x"></i></span><div>Primary</div><div class="text-muted">.text-primary</div></div>
<div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-info"><i class="fas fa-bell fa-2x"></i></span><div>Info</div><div class="text-muted">.text-info</div></div>
<div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-success"><i class="fas fa-check-circle fa-2x"></i></span><div>Success</div><div class="text-muted">.text-success</div></div>
<div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-warning"><i class="fas fa-exclamation-triangle fa-2x"></i></span><div>Warning</div><div class="text-muted">.text-warning</div></div>
<div class="col-xs-6 col-sm-4 col-md-2 text-center"><span class="text-danger"><i class="fas fa-exclamation fa-2x"></i></span><div>Danger</div><div class="text-muted">.text-danger</div></div>
{% endhighlight %}

</div>


<div class="pl-pattern">
### System Icons

* System icons should always be one solid color.
* System icons should either be black, white, or any other primary UI color.
* System icons can be placed in colored circles.
* Icon colors can be inverted with <code>.fa-inverse</code>.

{::nomarkdown}
<div class="pl-preview">
        <div style="margin-left: 20px;">
            <span class="fa-layers fa-2x">
              <i class="fas fa-circle text-primary"></i>
              <i class="fas fa-bell fa-inverse" data-fa-transform="shrink-8 down-.25 right-.25"></i>
            </span>
            <span class="fa-layers fa-2x">
              <i class="fas fa-circle text-info"></i>
              <i class="fas fa-comment fa-inverse" data-fa-transform="shrink-8 down-.25 right-.25"></i>
            </span>
            <span class="fa-layers fa-2x">
              <i class="fas fa-circle text-danger"></i>
              <i class="fas fa-file-archive fa-inverse" data-fa-transform="shrink-8 down-.25 right-.25"></i>
            </span>

    </div>
</div>
{:/nomarkdown}

{% highlight html %}
    <span class="fa-layers fa-2x">
        <i class="fas fa-circle text-primary"></i>
        <i class="fas fa-bell fa-inverse" data-fa-transform="shrink-8 down-.25 right-.25"></i>
    </span>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Icon sizing

* Icons can vary in size, from extra small to 10x, by adding <code>.fa-xs</code>, <code>.fa-sm</code>, <code>.fa-lg</code>, <code>.fa-2x</code>, <code>.fa-3x</code>, <code>.fa-5x</code>, <code>.fa-10x</code>.
* When scaling icons, ensure the sizes used appear sharp on standard and high DPI screens.


{::nomarkdown}
<div class="pl-preview">
    <div class="row" style="max-width: 900px;">    
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><div class="text-muted">.fa-xs</div><i class="fas fa-chart-pie fa-xs"></i></div>
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><div class="text-muted">.fa-sm</div><i class="fas fa-chart-pie fa-sm"></i></div>
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><div class="text-muted">.fa-lg</div><i class="fas fa-chart-pie fa-lg"></i></div>
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><div class="text-muted">.fa-2x</div><i class="fas fa-chart-pie fa-2x"></i></div>
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><div class="text-muted">.fa-3x</div><i class="fas fa-chart-pie fa-3x"></i></div>
        <div class="col-xs-6 col-sm-4 col-md-2 text-center"><div class="text-muted">.fa-3x</div><i class="fas fa-chart-pie fa-5x"></i></div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
        <div class="text-muted">.fa-xs</div><i class="fas fa-chart-pie fa-lg"></i>
{% endhighlight %}

</div>



<div class="pl-pattern">
### Rotation

Power Transform rotating and flipping effects icon angle and reflection without changing or moving the container. To rotate or flip icons use any combination of <code>rotate-#</code>, <doce>flip-v</doce>, and <code>flip-h</code> with any arbitrary value. 

{::nomarkdown}
<div class="pl-preview">
    <div class="fa-4x">
      <i class="fas fa-magic" data-fa-transform="rotate-90" ></i>
      <i class="fas fa-magic" data-fa-transform="rotate-180" ></i>
      <i class="fas fa-magic" data-fa-transform="rotate-270" ></i>
      <i class="fas fa-magic" data-fa-transform="rotate-30" ></i>
      <i class="fas fa-magic" data-fa-transform="rotate--30" ></i>
      <i class="fas fa-magic" data-fa-transform="flip-v" ></i>
      <i class="fas fa-magic" data-fa-transform="flip-h" ></i>
      <i class="fas fa-magic" data-fa-transform="flip-v flip-h" ></i>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
    <div class="fa-4x">
      <i class="fas fa-magic" data-fa-transform="rotate-90"></i>
      <i class="fas fa-magic" data-fa-transform="rotate-180" ></i>
      <i class="fas fa-magic" data-fa-transform="rotate-270" ></i>
      <i class="fas fa-magic" data-fa-transform="rotate-30" ></i>
      <i class="fas fa-magic" data-fa-transform="rotate--30" ></i>
      <i class="fas fa-magic" data-fa-transform="flip-v"></i>
      <i class="fas fa-magic" data-fa-transform="flip-h"></i>
      <i class="fas fa-magic" data-fa-transform="flip-v flip-h"></i>
    </div>
{% endhighlight %}

</div>


<div class="pl-pattern">
### Animation

Use the <code>.fa-spin</code> class to get any icon to rotate, and use <code>.fa-pulse</code> to have it rotate with 8 steps.

* Where possible, use icons for content loading animation

{::nomarkdown}
<div class="pl-preview">
        <div class="fa-3x">
          <i class="fas fa-spinner fa-spin"></i>
          <i class="fas fa-circle-notch fa-spin"></i>
          <i class="fas fa-sync fa-spin"></i>
          <i class="fas fa-cog fa-spin"></i>
          <i class="fas fa-spinner fa-pulse"></i>
        </div>
</div>
{:/nomarkdown}

{% highlight html %}
    <div class="fa-3x">
      <i class="fas fa-spinner fa-spin"></i>
      <i class="fas fa-circle-notch fa-spin"></i>
      <i class="fas fa-sync fa-spin"></i>
      <i class="fas fa-cog fa-spin"></i>
      <i class="fas fa-spinner fa-pulse"></i>
    </div>
{% endhighlight %}

</div>




