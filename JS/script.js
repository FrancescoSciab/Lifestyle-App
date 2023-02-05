
let inputTimeout;
$("input").on("input", function(){
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(function() {
        let input = document.getElementById('input').value;
        console.log(input);
        console.log(input);
        $.getJSON(`https://api.teleport.org/api/urban_areas/slug:${input}/scores/`, function(data){//success callback function
        let items = [];// will store items of the loop below
        $.each(data.categories, function(key, val) {
            items.push("<li>" + val.name + ": " + val.score_out_of_10 + "</li>");
        });
        //creating ul, adding string of items to the innerHTML of ul and appending to body
        $("<ul/>", {
            "class": "list",
            html: items.join("")
        }).appendTo("body");
    });
    }, 500)
});

