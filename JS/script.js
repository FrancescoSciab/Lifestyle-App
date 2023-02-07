//It's a global variable to keep track of the setTimeout call that is created when the input event fires
let inputTimeout;
let createdUl;
$("input").on("input", function(){
    // to ensure that a new timeout will be set each time the input event is triggered
    clearTimeout(inputTimeout);
    //To execute the function 0.5 seconds later user has stopped typing
    inputTimeout = setTimeout(function() {
        let input = document.getElementById('input').value;
        if (!input) {
            if (createdUl) {
                console.log("ciao");
                createdUl.remove();
            }
            return;
        }
        if(!input || $(`ul.city-${input}`).length){
            return;
        }
        $.getJSON(`https://api.teleport.org/api/urban_areas/slug:${input}/scores/`, function(data){//success callback function
        let items = [];// will store items of the loop below
        $.each(data.categories, function(key, val) {
            items.push("<li>" + val.name + ": " + val.score_out_of_10 + "</li>");
        });
        //creating ul, adding string of items to the innerHTML of ul and appending to body
        createdUl = $("<ul/>", {
            "class": `list city-${input}`,
            html: `<h2> ${input} </h2>` + items.join("")
        }).appendTo("body");
        }).fail(function(){
            $("input").css("background-color", "red");
            console.error("city not available!");
        });
    }, 500);
    
});

