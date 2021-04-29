/* global breeze */
(function () {
    'use strict';

    $.widget('upsellProducts', {
        options: {
            elementsSelector: '.item.product'
        },

        /** Initialize plugin */
        create: function () {
            if (this.element.data('shuffle')) {
                breeze.shuffleElements(this.element.find(this.options.elementsSelector));
            }

            breeze.revealElements(
                this.element.find(this.options.elementsSelector),
                this.element.data('limit'),
                this.element.data('shuffle-weighted')
            );
        }
    });

    $(document).on('breeze:mount:upsellProducts', function (event, data) {
        $(data.el).upsellProducts(data.settings);
    });
})();
