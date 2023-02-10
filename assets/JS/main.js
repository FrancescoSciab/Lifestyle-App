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
        //2: making it match the correct slug
        let formattedInput = input.toLowerCase().split(" ").join("-");


        if($(`ul.city-${formattedInput}`).length){//if ul exists, its lenght will be greater than 0
            return;
        }

        if (!formattedInput) {//user deleted or clicked x
            if (createdUl) {
                createdUl.remove();//to remove what user requested
            }
            return;
        }

        //3: API call
        $.getJSON(`https://api.teleport.org/api/urban_areas/slug:${formattedInput}/scores/`, function(data){//success callback function

          //action 1: will store items of the loop below
        let items = []; 
        
          //action 2: loop and push
        $.each(data.categories, function(key, val) {
            items.push("<li><strong>" + val.name + "</strong>" + ": " + val.score_out_of_10 + "</li>");
        });


          //action 3: creating ul, adding string of items to the innerHTML of ul and appending to selected div (*)
        createdUl = $("<ul/>", {
            "class": `list city-${formattedInput}`,
            html: `<h2> ${input} </h2>` + items.join("")
        }).appendTo("#categories");//selected div (*)

        //error handler function
        }).fail(function(){
            //fail action 1:
            let error = $("<p/>", {
                "class": "text-danger",
                "html": "City not available"
            }).appendTo('#label');
            //fail action 2:
            setTimeout(function(){
                error.remove()
            }, 2000);
            //fail action 3:
            console.error("city not available!");
        });
    }, 500);
    
});

