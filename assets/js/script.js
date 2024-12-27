(function ($) {
    $.fn.jnResponsiveTable = function (options) {
        if ($(window).width() < 576) {
            var parentClass = jQuery(this);
            console.log(jQuery(this));

            var aa;
            var bb;
            var tHeading = '';
            var tContent = '';
            var fullCntnt;

            // This is using for default options.
            var settings = $.extend({
                // These are the defaults.
                column: 1 // which column is to display on mobile initially
            }, options);

            parentClass.find("thead th").hide();
            parentClass.find("tbody td").hide();
            parentClass.find(`tbody td:nth-child(${settings.column})`).show();
            parentClass.find(`tbody td:nth-child(${settings.column})`).prepend("<span>" + parentClass.find(`thead th:nth-child(${settings.column})`).text() + "</span>")
            parentClass.find("tbody td").click(function () {

                if (jQuery(this).hasClass("activeTD")) {
                    jQuery(".jn_newAppendedBaby").remove();
                    parentClass.find("tbody td").removeClass("activeTD");
                } else {
                    jQuery(".jn_newAppendedBaby").remove();
                    parentClass.find("tbody td").removeClass("activeTD");
                    jQuery(this).addClass("activeTD");

                    aa = parentClass.find("thead th")
                    bb = jQuery(this).closest("tr").find("td")
                    jQuery(aa).each(function (index) {
                        if (index + 1 != settings.column) {
                            tHeading += "<li>" + jQuery(this).text() + "</li>";
                        }
                    });

                    jQuery(bb).each(function (index) {
                        if (index + 1 != settings.column) {
                            tContent += "<li>" + jQuery(this).html() + "</li>";
                        }
                    });

                    fullCntnt = "<div class='jn_newAppendedBaby'><ul>" + tHeading + "</ul><ul>" + tContent + "</ul></div>";
                    //console.log(fullCntnt);
                    // jQuery(fullCntnt).insertAfter(jQuery(this).closest("tr"));
                    jQuery(this).append(fullCntnt);
                    tHeading = '';
                    tContent = '';
                }
            })
        }
    }
}(jQuery));
