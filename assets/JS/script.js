//It's a global variable to keep track of the setTimeout call that is created when the input event fires
let inputTimeout;
let createdUl;

//API call triggers 0.5 seconds later user finishes typing
$("input").on("input", function(){

    // to ensure that a new timeout will be set each time the input event is triggered
    clearTimeout(inputTimeout);
    
    inputTimeout = setTimeout(function() {
        //1: getting input value
        let input = document.getElementById('input').value;


        if(!input || $(`ul.city-${input}`).length){//if ul exists, its lenght will be greater than 0
            return;
        }

        if (!input) {//user deleted or pressed x
            if (createdUl) {
                createdUl.remove();//to remove what user requested
            }
            return;
        }

        //2: API call
        $.getJSON(`https://api.teleport.org/api/urban_areas/slug:${input}/scores/`, function(data){//success callback function

        //3: will store items of the loop below
        let items = []; 
        
        //4: loop and push
        $.each(data.categories, function(key, val) {
            items.push("<li><strong>" + val.name + "</strong>" + ": " + val.score_out_of_10 + "</li>");
        });


        //5: creating ul, adding string of items to the innerHTML of ul and appending to selected div
        createdUl = $("<ul/>", {
            "class": `list city-${input}`,
            html: `<h2> ${input} </h2>` + items.join("")
        }).appendTo("#categories");

        //6: error handler function
        }).fail(function(){
            let error = $("<div/>", {
                "class": "error-text position-relative text-danger",
                "html": "City not available"
            }).appendTo('#label');
            setTimeout(function(){
                error.remove()
            }, 2000);
            console.error("city not available!");
        });
    }, 500);
    
});

