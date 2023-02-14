
//animating instructions buttons
export let buttonsAnimation = $(document).ready(function(){
    $("#how-to-use-text, #description-text").hide();//text has to be hidden
    $("#how-to-use, #description").click(function(){
        $(this).next().animate({//setting animation
            height: 'toggle'
        });
    });
});


