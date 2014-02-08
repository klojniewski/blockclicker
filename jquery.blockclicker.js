/*globals jQuery, window, document */
(function ($) {
    "use strict";
    var pluginName  =   "blockClicker",
        defaults    =   {
            link:     'h4 a'
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
            this.$element.on('click', function () {
                $(this).find(that.settings.link).trigger('click');
            });
            this.$element.on('click', that.settings.link, function (e) {
                e.preventDefault();
                e.stopPropagation();
                window.location = this.href;
            });
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