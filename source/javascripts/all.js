//= require_tree .

$(document).ready(function() {
    $('a[href^=#]').click(function(){
        var target= $(this).attr("href");
        var webkit = !document.uniqueID && !window.opera && !window.globalStorage && window.localStorage;
        $(webkit ? 'body' : 'html').animate({
            scrollTop: $(target).offset().top
            },400,'swing'
        );
        return false;
    });
});