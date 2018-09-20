# Magestyle Banner Slider
Magento2 banner slider by Magestyle

Using this module, you will be able to use [OwlCarousel2](https://github.com/OwlCarousel2/OwlCarousel2) with Magento 2 through requirejs.

## Installation

```
composer require magestyle/banner-slider
bin/magento setup:upgrade
```

View more - http://magestyle.com/

## Usage
### OwlCarousel Initialization
####  Block/CMS Initialization

You can init the slider with `data-mage-init`:
```
<div id="your-slider" class="owl-carousel" data-mage-init='{
    "OwlCarousel": {
      "autoPlay"          :   true,
      "autoplayTimeout"   :   2000,
      "loop"              :   true,
      "items"             :   1,
      "dots"              :   true
    }
}'>
    <img src="banner-image-1.jpg" />
    <img src="banner-image-2.jpg" />
    <img src="banner-image-3.jpg" />
    <img src="banner-image-4.jpg" />
</div>
```
####  Template Initialization

Using x-magento-init: <br/>
`<script type="text/x-magento-init">`

```
<div id="your-slider" class="owl-carousel">
    <img src="banner-image-1.jpg" />
    <img src="banner-image-2.jpg" />
    <img src="banner-image-3.jpg" />
    <img src="banner-image-4.jpg" />
</div>
<script type="text/x-magento-init">
     {
         "#your-slider": {
             "OwlCarousel": {
                "autoplay"        : true,
                "autoPlayTimeout" : 2000,
                "loop"            : true,
                "items"           : 1,
                "dots"            : true
             }
         }
     }
 </script>
```

### OwlCarousel Themes
This module loads only the base css from OwlCarousel by default. <br/>
If you need to add Owl Carousel Themes, you can include in your theme's layout xml as follows. <br/>
You can add it to your Magento 2 theme's default layout ```default.xml```  or whatever layout file under head section.<br/>

Example: Magento_Theme/layout/default.xml

```
    <head>
        <css src="Magestyle_Bannerslider::css/owl.theme.default.min.css" />
    </head>
```
