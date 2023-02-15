//It's a global variable to keep track of the setTimeout call that is created when the input event fires
let inputTimeout;
let categoriesUl;


export const searchBar = $(document).ready( function(){
    $("input").on("input", function(){
    
        // to ensure that a new timeout will be set each time the input event is triggered
        clearTimeout(inputTimeout);
        
        //runs 0.5s later user finishes typing
        inputTimeout = setTimeout(function() {
           
            let cityInput = document.getElementById('input').value;
            let formattedCityInput = cityInput.toLowerCase().split(" ").join("-");
            
            //conditions which prevent API call
            if($(`ul.city-${formattedCityInput}`).length){//if ul exists, its lenght will be greater than 0
                return;
            }
    
            //condition has to be declared here to not run error either
            if (!formattedCityInput) {//user deleted or clicked x
                if (categoriesUl) {
                    categoriesUl.remove();//to remove what user requested
                }
                return;
            }
            
           
            $.getJSON(`https://api.teleport.org/api/urban_areas/slug:${formattedCityInput}/scores/`, function(data){
    
                //will store items of the loop below
                const items = []; 
    
                $.each(data.categories, function(key, val) {
                    items.push("<li><strong>" + val.name + "</strong>" + ": " + val.score_out_of_10 + "</li>");
                });
    
                categoriesUl = $("<ul/>", {
                    "class": `list city-${formattedCityInput}`,
                    html: `<h2> ${cityInput} </h2>` + `<li> ${data.summary} </li>` + items.join("")
                }).appendTo("#categories");//selected div (*)
            
            }).fail(function(){
                
                const error = $("<p/>", {
                    "class": "text-danger",//boostrap info
                    "html": "City not available"
                }).appendTo('#label');
    
                setTimeout(function(){
                    error.remove()
                }, 2000);
                
                console.error("city not available or city name misspelled");
            });
        }, 500);
    })
});