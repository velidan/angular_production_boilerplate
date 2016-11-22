(function ($, window) {
    'use strict';

    var MultiModal = function (element) {
        this.$element = $(element);
        this.modalCount = 0;
    };

    MultiModal.BASE_ZINDEX = 1040;

    MultiModal.prototype.show = function (target) {
        var that = this;
        var $target = $(target);
        var modalIndex = that.modalCount++;

        $target.css('z-index', MultiModal.BASE_ZINDEX + (modalIndex * 20) + 10);

        window.setTimeout(function () {
            if ($target.parents('.modal').length) {
                $('.modal-backdrop:last').insertAfter($target);
                $('.modal-backdrop').css('border-radius', '6px');
            }

            else if (modalIndex > 0 && !$target.parents('.modal').length) {
                $('.modal-backdrop:last').addClass('hidden');
            }

            if (modalIndex === 2 && $target.parents('.modal').length === 1) {
                $('.modal-backdrop').not(':first').not(':last').addClass('hidden');
            }

            that.adjustBackdrop();

            $($target).find('.closeModal').attr("data-dismiss-modal", modalIndex);

            $('button[data-dismiss-modal="' + modalIndex + '"]:last').click(function (e) {
                e.stopImmediatePropagation();
                $(this).closest('.modal').modal('hide');
            });


            $(document).click(function (e) {
                if ($(e.target).hasClass('in') && $('body').hasClass('modal-open')) {
                    e.stopImmediatePropagation();
                    var modalIndex = $('.modal-backdrop').length - 1;
                    $('button[data-dismiss-modal="' + modalIndex + '"]').closest('.modal').modal('hide');
                }
            });

            $(document).keyup(function (e) {
                if (e.which == 27 && $('body').hasClass('modal-open')) {
                    e.stopImmediatePropagation();
                    var modalIndex = $('.modal-backdrop').length - 1;
                    $('button[data-dismiss-modal="' + modalIndex + '"]').closest('.modal').modal('hide');
                }
            });
        });

    };


    MultiModal.prototype.hidden = function () {
        this.modalCount--;
        if (this.modalCount) {
            this.adjustBackdrop();

            $('body').addClass('modal-open');
        }
    };

    MultiModal.prototype.adjustBackdrop = function () {
        var modalIndex = this.modalCount - 1;
        $('.modal-backdrop:first').css('z-index', MultiModal.BASE_ZINDEX + (modalIndex * 20));
    };

    function Plugin(method, target) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('multi-modal-plugin');

            if (!data)
                $this.data('multi-modal-plugin', (data = new MultiModal(this)));

            if (method)
                data[method](target);
        });
    }

    $.fn.multiModal = Plugin;
    $.fn.multiModal.Constructor = MultiModal;

    $(document).on('show.bs.modal', function (e) {
        $(document).multiModal('show', e.target);
    });

    $(document).on('hidden.bs.modal', function (e) {
        $(document).multiModal('hidden', e.target);
    });

}(jQuery, window));