#blockClicker


###Benefits
* You can allow (mobile) users to click on whole block element.
* Bigger clickable area.
* No need to change HTML.


##Installation

###Step 1: Link plugin file

```html
<script src="/js/jquery.blockclicker.js"></script>
```

###Step 2: Call the blockClicker

Call .blockClicker() on block element. Note that the call must be made inside of a $(document).ready() call, or the plugin will not work!

```javascript
$(document).ready(function(){
  $('.feed-econ').blockClicker({
    link: 'h4 a'
  });
});
```

##Configuration options


**link**
Selector of link inside block element
```
default: 'h4 a'
options: jQuery selector
```
