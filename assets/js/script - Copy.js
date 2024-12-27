jQuery(".ap_table_resp tbody td:nth-child(1)").prepend("<span>"+ jQuery(".ap_table_resp thead th:nth-child(1)").text() +"</span>")

var aa;
var bb;
var tHeading = '';
var tContent = '';
var fullCntnt;
jQuery(".ap_table_resp tbody td").click(function(){

    if(jQuery(this).hasClass("activeTD")){
        jQuery(".ap_newAppendedBaby").remove();
        jQuery(".ap_table_resp tbody td").removeClass("activeTD");
    } else{
        jQuery(".ap_newAppendedBaby").remove();
        jQuery(".ap_table_resp tbody td").removeClass("activeTD");
        jQuery(this).addClass("activeTD");

        aa = jQuery(".ap_table_resp thead th:nth-child(n+2)")
        bb = jQuery(this).closest("tr").find("td:nth-child(n+2)")
        jQuery(aa).each(function(index){
            tHeading += "<li>" + jQuery(this).text() + "</li>";
        });

        jQuery(bb).each(function(index){
            tContent += "<li>" + jQuery(this).html() + "</li>";
        });

        fullCntnt = "<div class='ap_newAppendedBaby'><ul>" + tHeading + "</ul><ul>" + tContent + "</ul></div>";
        //console.log(fullCntnt);

        // jQuery(fullCntnt).insertAfter(jQuery(this).closest("tr"));

        jQuery(this).append(fullCntnt);

            
        tHeading = '';
        tContent = '';
    }
})

//
//
//(function($) {
//
//    $.fn.apCarousel = function(options) {
//
//        // This is usingfor default options.
//        var settings = $.extend({
//            // These are the defaults.
//            width: "576px",
//            column: 2,
//            closeColumn: true, // when open open one column hide all others
//        }, options);
//    }
//
//}(jQuery));