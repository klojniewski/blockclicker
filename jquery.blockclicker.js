/*globals jQuery, window, document */
(function ($) {
    "use strict";
    var pluginName  =   "blockClicker",
        defaults    =   {
            link:       'h4 a',
            target:     false
        };
    // The actual plugin constructor
    function Plugin(element, options) {
        this.element        =   element;
        this.$element       =   $(this.element);
        this.settings       =   $.extend({}, defaults, options);
        this.init();
    }
    Plugin.prototype = {
        init: function () {
            var that = this;
            this.$element.on('click', function (e) {
                if ($(e.target).is(that.settings.link)) {
                    if (that.settings.target) {
                        var newWindow = window.open($(e.target).attr('url'), $(e.target).attr('target'));
                        newWindow.focus();
                    }
                } else {
                    $(this).find(that.settings.link).trigger('click', 'was triggered');
                }
            });
            if (this.settings.target) {
                this.$element.find(that.settings.link).attr('target', this.settings.target);
            }
        }
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
}(jQuery));