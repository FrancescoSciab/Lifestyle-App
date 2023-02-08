
$(document).ready(function(){
    $("#how-to-use-text, #description-text").hide();
    $("#how-to-use, #description").click(function(){
        $(this).next().animate({
            height: 'toggle'
        });
    });
});